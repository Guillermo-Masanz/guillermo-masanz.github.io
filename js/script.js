const clientId = 'b482b50162c44b21a0a0226f4091fd5b';
const redirectUri = 'https://yourusername.github.io/your-repo-name/callback.html';
const scopes = [
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public'
];

document.getElementById('login-btn').addEventListener('click', () => {
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl;
});

const accessToken = localStorage.getItem('spotify_access_token');

if (accessToken) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('backup-btn').style.display = 'inline';
    document.getElementById('import-btn').style.display = 'inline';
}

async function fetchPlaylists(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await response.json();
    return data.items;
}

async function savePlaylists() {
    const accessToken = localStorage.getItem('spotify_access_token');
    const playlists = await fetchPlaylists(accessToken);
    const blob = new Blob([JSON.stringify(playlists)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playlists_backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function importPlaylists() {
    const accessToken = localStorage.getItem('spotify_access_token');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        const text = await file.text();
        const playlists = JSON.parse(text);

        for (const playlist of playlists) {
            await fetch('https://api.spotify.com/v1/users/me/playlists', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: playlist.name,
                    public: playlist.public
                })
            });
        }
    };
    input.click();
}

document.getElementById('backup-btn').addEventListener('click', savePlaylists);
document.getElementById('import-btn').addEventListener('click', importPlaylists);
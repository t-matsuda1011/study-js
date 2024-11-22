document.getElementById('load-users').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.className = 'card';
            listItem.innerHTML = `
            <h2>${user.name}</h2>
            <h3>ユーザーネーム: ${user.username}</h3>
            <p>メール: ${user.email}</p>
            <ul>住所:
                <li>street: ${user.address.street}</li>
                <li>suite: ${user.address.suite}</li>
                <li>city: ${user.address.city}</li>
                <ul>geo
                    <li>lat: ${user.address.geo.lat}</li>
                    <li>lng: ${user.address.geo.lng}</li>
            </ul>
            `
            userList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error('エラーが発生しました:', error);
    });
});
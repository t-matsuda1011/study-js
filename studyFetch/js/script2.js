document.addEventListener("DOMContentLoaded", () => {
    const searchUser = document.getElementById("searchUser");
    const userId = document.getElementById("userId");
    const API_URL = "https://jsonplaceholder.typicode.com/users/";

    searchUser.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = userId.value;

        if (id) {

            fetch(`${API_URL}${id}`)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error('ユーザーが見つかりません (404 Not Found)');
                    }
                    return response.json();
                })
                .then((user) => {

                    const userCard = document.getElementById("userCard");
                    userCard.innerHTML = '';

                        const userDetail = document.createElement('li');
                        userDetail.className = 'detail';
                        userDetail.innerHTML = `
                            <h2>${user.name}</h2>
                            <h3>ユーザーネーム: ${user.username}</h3>
                            <p>メール: ${user.email}</p>
                            <ul>住所:
                                <li>street: ${user.address.street}</li>
                                <li>suite: ${user.address.suite}</li>
                                <li>city: ${user.address.city}</li>
                                <ul>geo:
                                    <li>lat: ${user.address.geo.lat}</li>
                                    <li>lng: ${user.address.geo.lng}</li>
                            </ul>
                            `
                        console.log(userDetail);

                        userCard.appendChild(userDetail);
                    })
                    .catch(error => {
                        userCard.innerHTML = `<p class="error">エラー: ${error.message}</p>`;
                    });
        }
    });
});
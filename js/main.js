document.addEventListener('DOMContentLoaded', () => {
    // Lógica para a página de Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário
            const username = registerForm.querySelector('#username').value;
            const password = registerForm.querySelector('#password').value;
            
            // Salva o usuário no localStorage
            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('Usuário registrado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        });
    }

    // Lógica para a página de Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário
            const username = loginForm.querySelector('#username').value;
            const password = loginForm.querySelector('#password').value;
            
            // Pega o usuário do localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert('Login bem-sucedido!');
                window.location.href = 'index.html'; // Redireciona para a página principal
            } else {
                alert('Usuário ou senha incorretos.');
            }
        });
    }
});
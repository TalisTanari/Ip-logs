function submitText() {
    const input = document.getElementById('ipInput').value;
    if (input.trim() !== '') {
        // Get existing logs from localStorage or initialize empty array
        let logs = JSON.parse(localStorage.getItem('ipLogs')) || [];
        logs.push(input);
        localStorage.setItem('ipLogs', JSON.stringify(logs));
        window.location.href = 'list.html';
    } else {
        alert('Please enter some text');
    }
}

function displayList() {
    const list = document.getElementById('ipList');
    const logs = JSON.parse(localStorage.getItem('ipLogs')) || [];
    
    list.innerHTML = '';
    logs.forEach(log => {
        const li = document.createElement('li');
        li.textContent = log;
        list.appendChild(li);
    });
}

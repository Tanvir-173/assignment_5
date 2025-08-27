const hearts = document.getElementsByClassName('card-heart-icon');

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function (event) {
        event.preventDefault();

        const heart_count = parseInt(document.getElementById('heart-count').innerText);
        const new_count = heart_count + 1;

        document.getElementById('heart-count').innerText = new_count;
    })
}

const callButtons = document.getElementsByClassName('call-btn');
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function (event) {
        event.preventDefault()

        const coin_count = parseInt(document.getElementById('coin-count').innerText)
        if (coin_count < 20) {
            alert("Not enough coins to make a call!");
            return; // terminate
        }

        else {
            const historyList = document.getElementById('historyList');
            const card = this.parentElement.parentElement;
            console.log(card)
            const serviceName = card.querySelector('.service-name').innerText;
            const serviceNumber = card.querySelector('.service-number').innerText;
            alert(`Calling ${serviceName} at ${serviceNumber}`);
            const new_coin_count = coin_count - 20
            document.getElementById('coin-count').innerText = new_coin_count;
            const li = document.createElement('li');


const now = new Date();
const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

li.innerHTML = `
  <div style="
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 15px;
    margin: 8px 0;
    background: #f9f9f9;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  ">
    <strong>${serviceName}</strong><br>
    <span>${serviceNumber}</span><br>
    <small style="color: gray;">🕒 ${timeString}</small>
  </div>
`;

historyList.appendChild(li);

        }


    })

}

const clearHistoryBtn = document.getElementById('clear-history');
clearHistoryBtn.addEventListener('click', function(event) {
    event.preventDefault()
  historyList.innerHTML = "";
});

const copyButtons = document.getElementsByClassName('copy-btn');

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
     const card = this.parentElement.parentElement;
    const serviceNumber = card.querySelector('.service-number').innerText;
     navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`Hotline number ${serviceNumber} copied!`);
       });

     const copyCount = parseInt(document.getElementById('copy-count').innerText);
    const new_copy_count=copyCount+1;
    document.getElementById('copy-count').innerText =new_copy_count;
  
  })

  }

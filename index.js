let isChanged = false;

const phoneInput = document.getElementById('whatsapp-link-phone');
const emailInput = document.getElementById('whatsapp-link-email');
const messageTextarea = document.getElementById('whatsapp-link-message');
const submitButton = document.getElementById('whatsapp-link-submit-button');

phoneInput.addEventListener('input', () => isChanged = true);
emailInput.addEventListener('input', () => isChanged = true);
messageTextarea.addEventListener('input', () => isChanged = true);

submitButton.addEventListener('click', function () {
    if (!emailInput.value.includes('@')) {
        alert("Please, Enter a valid Email");
        return; // Stop further processing
    }


    if (isChanged) {
        // Clear previous output
        const previousPara = document.getElementById('whatsapp-link-dynamic-link-para');
        if (previousPara) previousPara.remove();
        const previousLabel = document.getElementById('whatsapp-link-dynamic-click-label');
        if (previousLabel) previousLabel.remove();

        // Create new elements
        const para = document.createElement("p");
        para.id = 'whatsapp-link-dynamic-link-para';
        // para.innerText = "Your WhatsApp QR Code";
        const qrOutputDiv = document.getElementsByClassName("whatsapp-link-link-output")[0];
        const canvas = document.getElementById('whatsapp-link-link-code');
        qrOutputDiv.insertBefore(para, canvas);

        const label = document.createElement("label");
        label.id = 'whatsapp-link-dynamic-click-label';
        label.innerText = "Your WhatsApp Click-To-Chat Link";
        const labelOutput = document.getElementsByClassName("whatsapp-link-output-show")[0];
        const urlBoxDiv = document.getElementById("whatsapp-link-url-box");
        labelOutput.insertBefore(label, urlBoxDiv);

        // Reset the change flag
        isChanged = false;

        // Ensure the new content is visible before scrolling
        setTimeout(() => {
            para.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
});




function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}



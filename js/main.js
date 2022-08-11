const header = document.querySelector("header");
const sectionOne = document.querySelector(".about");

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');



const sectionOneOptions = {
    rootMargin: "-5% 0% 0% 0%"
};

const sectionOneObserver = new IntersectionObserver
(function
    (entries, 
    sectionOneObserver) 
    {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }else{
            header.classList.remove('nav-scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const appearOptions = {
    threshold: 0.1,
    rootMargin: "0% 0% -20px 0%"
};

const appearOnScroll = new IntersectionObserver(function(entries, 
appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

function sendEmail() {
Email.send({
Host: "smtp.elasticemail.com",
Username: "mykevinzp@gmail.com",
Password: "51748F6E93AF6321B695155234C9A66CC935",
To: 'akaose.ogochukwu29@gmail.com',
From: document.getElementById("email").value,
Subject: "New enquiry",
Body: "Name:" + document.getElementById("name").value
+ "<br> Email:" + document.getElementById("email").value
+ "<br> Phone number:" + document.getElementById("phone").value
+ "<br> Message:" + document.getElementById("message").value
}).then(
message => alert("Message sent successfully")
);
}

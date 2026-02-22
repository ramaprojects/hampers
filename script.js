const hampersData = {
    single: {
        title: "Single Hampers",
        images: [
            "images/dyahinverted.png",
            "images/sample.png",
            "images/notext.png"
        ],
        items: [
            "1 Cookies Premium (200gr)",
            "Voucher belanja Dyah Bakery",
            "Kartu ucapan personal"
        ],
        wa: "https://wa.me/6282?text=Halo,%20aku"
    },

    double: {
        title: "Double Hampers",
        images: [
            "images/dyahinverted.png",
            "images/sample.png",
            "images/notext.png"
        ],
        items: [
            "2 Cookies Premium",
            "Voucher belanja",
            "Kartu ucapan personal"
        ],
        wa: "https://wa.me/628xxxx"
    },

    family: {
        title: "Family Hampers",
        images: [
            "images/dyahinverted.png",
            "images/sample.png",
            "images/notext.png"
        ],
        items: [
            "3 Cookies Premium",
            "Voucher belanja",
            "Kartu ucapan personal"
        ],
        wa: "https://wa.me/628xxxx"
    },

    sekilo: {
        title: "1 kg Series",
        images: [
            "images/dyahinverted.png",
            "images/sample.png",
            "images/notext.png"
        ],
        items: [
            "1kg Cookies Premium",
            "Voucher belanja"
        ],
        wa: "https://wa.me/628xxxx"
    }
};

function openHampersModal(type){

    const data = hampersData[type];

    // judul
    document.getElementById('modalTitle').innerText =
        "Detail: " + data.title;

    // list isi
    const list = document.getElementById('modalList');
    list.innerHTML = '';
    data.items.forEach(item=>{
        list.innerHTML += `<li> <i class="bi bi-dot"></i> ${item}</li>`;
    });

    // carousel
    const imgWrapper = document.getElementById('carouselImages');
    imgWrapper.innerHTML = '';

    data.images.forEach((img, i)=>{
        imgWrapper.innerHTML += `
            <div class="carousel-item ${i===0?'active':''}">
                <img src="${img}" class="d-block w-100">
            </div>
        `;
    });

    // whatsapp
    document.getElementById('btnWhatsapp').href = data.wa;
}
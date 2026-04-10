/* Name: Bill Daniels
File: Assignment #4 Part 2
Date: 25-03-2026
Description: Image Gallery
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye."},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave."},
    {filename: "pic3.jpg", alt: "Purple and white pansies."},
    {filename: "pic4.jpg", alt: "Section of a wall from a pharaoh's tomb."},
    {filename: "pic5.jpg", alt: "Large moth on a leaf."}
];

const baseurl = [
    "https://mdn.github.io/shared-assets/images/examples/learn/gallery/"
];

for (const image of images) {
    const newImage = document.createElement("img");
    newImage.src = `${baseurl}${image.filename}`;
    newImage.alt = image.alt;
    newImage.tabIndex = "0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayedImage);
    newImage.addEventListener("keydown",(e) =>{
        if (e.code==="Enter") {
            updateDisplayedImage(e);
        }
    });

}
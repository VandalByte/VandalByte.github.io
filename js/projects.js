// Sources
// Project Icons : https://www.flaticon.com/packs/a-to-z-capital-letters-14

const projects = [
    {
        name: "Kality",
        description: "Kality is a neat package manager written C++ to make it easier for you to install tools from the Kali Linux repository on any Debian-based system. It works by adding the Kali repo to your APT sources with a low priority, this lets you access those kali tools while avoiding version clashes with similar packages from your main distribution.",
        skills: "C++, Linux",
        image: "./assets/letter-icons/letter-k.png",
        link: "https://github.com/VandalByte/kality",
    },
    {
        name: "Amcify - AMC Management Software",
        description: "Amcify is a GUI-based AMC (Annual Maintenance Contract) management software designed to streamline the tracking and management of service contracts. The software allows users to easily create, manage, and track AMC records for clients and products, helping businesses stay organized and efficient.",
        skills: "Python, Qt, MongoDB",
        image: "./assets/letter-icons/letter-a.png", // Replace with the appropriate image if needed
        link: "https://github.com/VandalByte/dedsec-grub2-theme", // Update the correct GitHub link
    },
    {
        name: "Nautica - Beach Suitability Predictor App",
        description: "Nautica is a Kotlin-based mobile app with backend services hosted on AWS EC2 and assets stored in S3 buckets. It helps users predict the suitability of beaches based on multiple criteria such as weather, cleanliness ratings, and other environmental factors to help users choose the best beach destinations.",
        skills: "Kotlin, AWS Compute, AWS S3",
        image: "./assets/letter-icons/letter-n.png", 
        link: "https://github.com/VandalByte/Nautica",
    },
    {
        name: "Woof - PetCare Mobile App",
        description: "Woof is a mobile app developed with Kotlin for pet owners. It helps manage pets' needs by allowing users to create profiles for multiple pets, track their activities, and receive notifications for their health and care requirements. The app integrates Google Sign-In for account management and Firebase for data storage and real-time updates.",
        skills: "Kotlin, Firebase",
        image: "./assets/letter-icons/letter-w.png", 
        link: "https://github.com/VandalByte/Woof",
    },
    {
        name: "NexVerse - CLI-Styled Social Media App",
        description: "NexVerse is a Social Media Database Management System that integrates a Python-based command-line interface with a MySQL database. The app is designed to enable users to interact with the platform's database, post content, and track real-time trends within the dynamic social media environment, using MySQL for efficient data management and Python for the interface.",
        skills: "Python, MySQL, RDBMS",
        image: "./assets/letter-icons/letter-n.png", 
        link: "https://github.com/VandalByte/nexverse-dbms-project",
    },
    {
        name: "FireFort",
        description: "FireFort is a simple firewall program written in Python specifically for Linux systems. It allows users to block incoming traffic based on protocols, providing network security. Additionally, it includes features for logging events and user configuration to customize firewall rules as per requirements.",
        skills: "Python, Networks",
        image: "./assets/letter-icons/letter-f.png", 
        link: "https://github.com/VandalByte/firefort",
    },
    {
        name: "Dark Matter GRUB Theme",
        description: "The Dark Matter GRUB theme is a sleek and modern theme for the GRUB bootloader, designed to give your system a futuristic look. It features dark colors and an immersive UI, making booting into Linux a visually appealing experience.",
        skills: "Linux, GRUB, Theme Development",
        image: "./assets/letter-icons/letter-d.png", // Replace with the appropriate image if needed
        link: "https://github.com/VandalByte/darkmatter-grub2-theme",
    },
    {
        name: "DedSec GRUB Theme",
        description: "The DedSec GRUB theme is inspired by the iconic 'Watch Dogs' franchise. It provides a custom GRUB bootloader interface with a cyberpunk aesthetic, making it stand out from default GRUB themes. This theme is designed to enhance the visual appeal and user experience when booting into Linux.",
        skills: "Linux, GRUB, Theme Development",
        image: "./assets/letter-icons/letter-d.png", // Replace with the appropriate image if needed
        link: "https://github.com/VandalByte/dedsec-grub2-theme",
    },
    {
        name: "Grub Tweaks - Community Blog",
        description: "Grub Tweaks is a community-driven repository where users contribute tweaks, enhancements, and fixes for the GRUB bootloader. The repository serves as a platform for sharing various GRUB customizations, configurations, and bootloader-related knowledge to help new users.",
        skills: "Linux, Shell Script, GRUB, Bootloader",
        image: "./assets/letter-icons/letter-g.png",
        link: "https://github.com/VandalByte/grub-tweaks",
    },
];
    

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
    // Create a project card
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-item");

    // Make the project box clickable
    projectCard.addEventListener("click", () => {
        window.open(project.link, "_blank");
    });

    // Split the description into sentences and convert them into bullet points
    const descriptionBullets = project.description
        .split(".")
        .filter(sentence => sentence.trim() !== "") // Remove empty entries
        .map(sentence => `<li>${sentence.trim()}.</li>`) // Wrap each sentence in a list item
        .join("");

    // Set the inner content of the card
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-image">
        <div class="project-details">
            <span class="project-header">${project.name}</span>
            <ul>${descriptionBullets}</ul> <!-- Render description as bullets -->
            <p><strong><img src="./assets/skill.png" width=16px style="position: relative; top: 2px;"> Skills:</strong> ${project.skills}</p>
        </div>
    `;

    projectsContainer.appendChild(projectCard);
});

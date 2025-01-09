// Sources
// Project Icons : https://www.flaticon.com/packs/a-to-z-capital-letters-14

const projects = [
    {
        name: "Kality",
        description: "Kality is a neat package manager written C++ to make it easier for you to install tools from the Kali Linux repository on any Debian-based system. It works by adding the Kali repo to your APT sources with a low priority, this lets you access those kali tools while avoiding version clashes with similar packages from your main distribution.",
        skills: "C++, Linux",
        image: "./assets/project/letter-k.png",
        link: "https://github.com/VandalByte/kality",
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
            <p><strong>Skills:</strong> ${project.skills}</p>
        </div>
    `;

    projectsContainer.appendChild(projectCard);
});

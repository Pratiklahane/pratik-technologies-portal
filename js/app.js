
// Navigation between website tabs
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));

        tab.classList.add("active");

        const selected = document.getElementById(tab.dataset.tab);
        selected.classList.add("active");
    });
});

// Interactive architecture details
const architectureInfo = {
    developer: {
        title: "Developer",
        description: "The developer writes application code and commits changes to the Git repository."
    },
    github: {
        title: "GitHub",
        description: "GitHub stores source code and tracks changes. A push triggers the CI/CD workflow."
    },
    jenkins: {
        title: "Jenkins",
        description: "Jenkins checks out source code, builds the Docker image, runs tests and deploys the application."
    },
    docker: {
        title: "Docker",
        description: "Docker packages the application and its dependencies into a portable container image."
    },
    kubernetes: {
        title: "Kubernetes",
        description: "Kubernetes manages application deployment, pods, replicas and service networking."
    },
    customer: {
        title: "Customer",
        description: "The customer accesses the deployed application through a web browser."
    }
};

const nodes = document.querySelectorAll(".node");
const details = document.getElementById("architecture-details");

nodes.forEach(node => {
    node.addEventListener("click", () => {
        nodes.forEach(item => item.classList.remove("selected"));
        node.classList.add("selected");

        const info = architectureInfo[node.dataset.info];

        details.innerHTML = `
            <h3>${info.title}</h3>
            <p>${info.description}</p>
        `;
    });
});

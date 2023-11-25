
      const number = Math.floor(Math.random() * 6);
        let currentProfileIndex = number;

        function updateProfile() {
            const profile = profiles[currentProfileIndex];
            document.getElementById('profileImg').src = profile.img;
            document.getElementById('profileTitle').textContent = profile.title;
            document.getElementById('profileDescription').textContent = profile.description;
            document.body.style.backgroundColor = profile.colors.body;
            document.getElementById('container').style.backgroundColor = profile.colors.container;
            document.getElementById('content').style.opacity = 1;
        }

        function handleButtonClick(platform) {
            const profile = profiles[currentProfileIndex];
            const link = profile.links[platform];
            if (link) {
                window.open(link, '_blank'); // Open link in a new tab
            }
        }
        function handleMailButtonClick() {
    const profile = profiles[currentProfileIndex];

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = profile.title;
    document.body.appendChild(tempInput);

    // Select the input text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Execute copy command
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide feedback (you can customize this part)
    alert(`Username copied : ${profile.title}`);
}



        function move(direction) {
            document.getElementById('content').style.opacity = 0;

            setTimeout(() => {
                if (direction === 'left') {
                    currentProfileIndex = (currentProfileIndex - 1 + profiles.length) % profiles.length;
                } else if (direction === 'right') {
                    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
                }

                updateProfile();
            }, 500); // Set the timeout duration to match the transition duration
        }

        // Initial profile update
        updateProfile();

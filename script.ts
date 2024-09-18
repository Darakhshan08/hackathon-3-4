// Handle form submission
document.getElementById('cvForm')?.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement).value;
  const about = (document.getElementById('about') as HTMLTextAreaElement).value;
  const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value.split(',');
  const education = (document.getElementById('education') as HTMLInputElement).value.split(',');

  // Populate CV fields
  (document.getElementById('cvName') as HTMLElement).textContent = name;
  (document.getElementById('cvEmail') as HTMLElement).textContent = `Email: ${email}`;
  (document.getElementById('cvPhone') as HTMLElement).textContent = `Phone: ${phone}`;
  (document.getElementById('cvAge') as HTMLElement).textContent = `Age: ${age}`;
  (document.getElementById('cvAbout') as HTMLElement).textContent = about;
  (document.getElementById('cvObjective') as HTMLElement).textContent = objective;

  // Dynamically add education
  const educationList = document.getElementById('cvEducation') as HTMLElement;
  educationList.innerHTML = ''; // Clear existing content
  education.forEach((item: string) => {
    const li = document.createElement('li');
    li.textContent = item.trim();
    educationList.appendChild(li);
  });

  // Add skills dynamically
  const skillsList = document.getElementById('cvSkills') as HTMLElement;
  skillsList.innerHTML = ''; // Clear existing content
  skills.forEach((skill: string) => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  // Add hobbies dynamically
  const hobbiesList = document.getElementById('cvHobbies') as HTMLElement;
  hobbiesList.innerHTML = ''; // Clear existing content
  hobbies.forEach((hobby: string) => {
    const li = document.createElement('li');
    li.textContent = hobby.trim();
    hobbiesList.appendChild(li);
  });

  // Handle image update
  const imageFile = (document.getElementById('profileImage') as HTMLInputElement)?.files?.[0];
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      const img = document.getElementById('cvProfileImage') as HTMLImageElement;
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(imageFile);
  }

  // Hide the form and show the CV
  (document.querySelector('.form-container') as HTMLElement).style.display = 'none';
  (document.getElementById('resumeContainer') as HTMLElement).style.display = 'block';
  (document.getElementById('toggleBtn') as HTMLElement).style.display = 'block';
});

// Toggle CV visibility
function toggleResume(): void {
  const resume = document.getElementById('resumeContainer') as HTMLElement;
  const toggleBtn = document.getElementById('toggleBtn') as HTMLElement;

  if (resume.style.display === 'none' || resume.style.display === '') {
    resume.style.display = 'block';
    toggleBtn.textContent = 'Hide CV';
  } else {
    resume.style.display = 'none';
    toggleBtn.textContent = 'Show CV';
  }
}

// Edit Resume
function editResume(): void {
  // Show the form and hide the CV
  (document.querySelector('.form-container') as HTMLElement).style.display = 'block';
  (document.getElementById('resumeContainer') as HTMLElement).style.display = 'none';
  (document.getElementById('toggleBtn') as HTMLElement).style.display = 'none';
}

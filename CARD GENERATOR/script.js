function downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';  
  link.download = 'Harshit_Bhatt_Resume.pdf';
  link.click();
}

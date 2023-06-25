const classifyButton = document.getElementById('classify-button');
const imageInput = document.getElementById('image-input');
const resultLabel = document.getElementById('result-label');

classifyButton.addEventListener('click', async () => {
  const file = imageInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('https://arju10-traditional-cloth-recognizer.hf.space/predict/image', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  resultLabel.textContent = `Label: ${result.label}`;
});

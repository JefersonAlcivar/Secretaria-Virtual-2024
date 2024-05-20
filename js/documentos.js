document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const documentList = document.getElementById('documentList');

    // Recuperar documentos de localStorage y mostrarlos
    const storedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
    storedDocuments.forEach(doc => addDocumentToList(doc));

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Asegúrate de prevenir el comportamiento predeterminado del formulario

        const documentoInput = document.getElementById('documento');
        const file = documentoInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileName = file.name;
                const fileContent = event.target.result;

                const newDocument = { name: fileName, content: fileContent };
                storedDocuments.push(newDocument);
                localStorage.setItem('documents', JSON.stringify(storedDocuments));

                addDocumentToList(newDocument);
                uploadForm.reset();
                alert('Documento subido exitosamente.');
            };
            reader.readAsDataURL(file);
        }
    });

    function addDocumentToList(document) {
        const li = document.createElement('li');
        li.textContent = document.name;
        documentList.appendChild(li);
    }
});

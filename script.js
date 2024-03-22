document.addEventListener("DOMContentLoaded", function() {
    // Adiciona consulta médica
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentTableBody = document.querySelector("#appointmentTable tbody");

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const doctorName = document.getElementById("doctorName").value;
        const appointmentDate = document.getElementById("appointmentDate").value;
        const appointmentTime = document.getElementById("appointmentTime").value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${doctorName}</td>
            <td>${appointmentDate}</td>
            <td>${appointmentTime}</td>
        `;
        appointmentTableBody.appendChild(newRow);

        // Limpa os campos do formulário após adicionar a consulta
        appointmentForm.reset();
    });

    // Adiciona medicamento
    const medicineForm = document.getElementById("medicineForm");
    const medicineTableBody = document.querySelector("#medicationTable tbody");

    medicineForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const medicineName = document.getElementById("medicineName").value;
        const medicineDate = document.getElementById("medicineDate").value;
        const medicineTime = document.getElementById("medicineTime").value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${medicineName}</td>
            <td>${medicineDate}</td>
            <td>${medicineTime}</td>
        `;
        medicineTableBody.appendChild(newRow);

        // Limpa os campos do formulário após adicionar o medicamento
        medicineForm.reset();
    });
});


        let payments = JSON.parse(localStorage.getItem('classPayments')) || [];
        let currentProofIndex = null;
        let currentDeleteIndex = null;
        
        function updateUI() {
            // Update summary stats
            const total = payments.reduce((sum, payment) => sum + payment.amount, 0);
            document.getElementById('totalAmount').textContent = `₦${total.toLocaleString()}`;
            document.getElementById('totalParticipants').textContent = payments.length;
            
            // Update table
            const table = document.getElementById('paymentTable');
            table.innerHTML = '';
            
            payments.forEach((payment, index) => {
                const row = document.createElement('tr');
                row.className = 'border-b payment-card hover:bg-gray-50';
                row.innerHTML = `
                    <td class="py-3 px-4">${payment.name}</td>
                    <td class="py-3 px-4">₦${payment.amount.toLocaleString()}</td>
                    <td class="py-3 px-4">${new Date(payment.date).toLocaleDateString()}</td>
                    <td class="py-3 px-4">
                        <span class="inline-block px-2 py-1 rounded-full text-xs font-semibold ${payment.verified ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}">
                            ${payment.verified ? 'Verified' : 'Pending'}
                        </span>
                    </td>
                    <td class="py-3 px-4">
                        ${payment.proof ? 
                            `<button onclick="viewProof(${index})" class="text-indigo-600 hover:text-indigo-800 action-btn">
                                View Proof
                            </button>` : 
                            'No proof'}
                    </td>
                    <td class="py-3 px-4 flex gap-2">
                        <button onclick="editPayment(${index})" class="text-blue-600 hover:text-blue-800 action-btn">
                            Edit
                        </button>
                        <button onclick="showDeleteModal(${index})" class="text-red-600 hover:text-red-800 action-btn">
                            Delete
                        </button>
                    </td>
                `;
                table.appendChild(row);
            });
        }
        
        function viewProof(index) {
            currentProofIndex = index;
            const payment = payments[index];
            document.getElementById('modalProofImage').src = payment.proof;
            document.getElementById('proofModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('proofModal').classList.add('hidden');
        }

        function verifyPayment() {
            if (currentProofIndex !== null) {
                payments[currentProofIndex].verified = true;
                localStorage.setItem('classPayments', JSON.stringify(payments));
                updateUI();
                closeModal();
                alert('Payment verified successfully!');
            }
        }

        function savePayment() {
            const name = document.getElementById('name').value.trim();
            const amount = parseFloat(document.getElementById('amount').value);
            const proofFile = document.getElementById('proof').files[0];
            const editIndex = document.getElementById('editIndex').value;

            // Validation
            if (!name || !amount) {
                alert('Please fill all required fields');
                return;
            }

            // Check for duplicate payments (only for new entries)
            if (editIndex === "") {
                const now = new Date();
                const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
                
                const existingPayment = payments.find(p => 
                    p.name.toLowerCase() === name.toLowerCase() && 
                    p.amount === amount &&
                    new Date(p.date) > twentyFourHoursAgo
                );

                if (existingPayment) {
                    alert('Possible duplicate payment detected for this student within 24 hours!');
                    return;
                }
            }

            // Process image proof
            if (proofFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    completePaymentSaving(name, amount, e.target.result, editIndex);
                };
                reader.readAsDataURL(proofFile);
            } else {
                // For edits, keep existing proof if no new one is uploaded
                if (editIndex !== "") {
                    const existingProof = payments[editIndex].proof;
                    completePaymentSaving(name, amount, existingProof, editIndex);
                } else {
                    alert('Please upload payment proof');
                    return;
                }
            }
        }

        function completePaymentSaving(name, amount, proofUrl, editIndex) {
            const paymentData = {
                name,
                amount,
                date: new Date().toISOString(),
                proof: proofUrl,
                verified: false
            };

            if (editIndex !== "") {
                // Update existing payment
                payments[editIndex] = paymentData;
            } else {
                // Add new payment
                payments.push(paymentData);
            }
            
            localStorage.setItem('classPayments', JSON.stringify(payments));
            updateUI();
            resetForm();
            alert('Payment saved successfully!');
        }

        function editPayment(index) {
            const payment = payments[index];
            document.getElementById('editIndex').value = index;
            document.getElementById('name').value = payment.name;
            document.getElementById('amount').value = payment.amount;
            
            // Show current proof if exists
            if (payment.proof) {
                document.getElementById('proofPreview').classList.remove('hidden');
                document.getElementById('proofPreviewImg').src = payment.proof;
            } else {
                document.getElementById('proofPreview').classList.add('hidden');
            }
            
            document.getElementById('formTitle').textContent = `Editing Payment for ${payment.name}`;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function resetForm() {
            document.getElementById('paymentForm').reset();
            document.getElementById('editIndex').value = "";
            document.getElementById('proofPreview').classList.add('hidden');
            document.getElementById('formTitle').textContent = "Record New Payment";
        }

        function showDeleteModal(index) {
            currentDeleteIndex = index;
            document.getElementById('deleteModal').classList.remove('hidden');
        }

        function closeDeleteModal() {
            document.getElementById('deleteModal').classList.add('hidden');
        }

        function confirmDelete() {
            if (currentDeleteIndex !== null) {
                payments.splice(currentDeleteIndex, 1);
                localStorage.setItem('classPayments', JSON.stringify(payments));
                updateUI();
                closeDeleteModal();
                alert('Payment deleted successfully!');
            }
        }

        function exportData() {
            const data = JSON.stringify(payments, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `payment-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
        }

        // Initialize
        updateUI();
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import qr from './img/qr-code.jpeg';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert'; // Import sweetalert

function QrisModal({ show, handleClose }) {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    handleClose();
    showConfirmation();
  };

  const showConfirmation = () => {
    Swal({
      title: 'Pembayaran di proses',
      text: 'Apaka anda ingin lanjut belanja?',
      icon: 'success',
      buttons: ['Batal', 'Ya, Kembali ke Belanja'],
      dangerMode: true,
    }).then((willReturn) => {
      if (willReturn) {
        navigate('/Shop'); 
      }
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bayar dengan QRIS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={qr} alt="QRIS Code" className="img-fluid" />
        <p>Silakan scan QR code di atas untuk melakukan pembayaran.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QrisModal;

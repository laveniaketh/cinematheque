// "use client";

// import Button from "../components/Button";
// import { Modal, ModalBody, ModalHeader } from "flowbite-react";
// import { useState } from "react";
// const ConfirmationPopup = ({HandleConfirm}) => {
//   const [openModal, setOpenModal] = useState(true);

//   return (
//     <>
//       <Button onClick={() => setOpenModal(true)}>Confirm</Button>
//       <Modal
//         show={openModal}
//         size="md"
//         onClose={() => setOpenModal(false)}
//         popup
//       >
//         <ModalHeader />
//         <ModalBody>
//           <div className="text-center">
//             {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
//             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//               Are you sure you want to delete this product?
//             </h3>
//             <div className="flex justify-center gap-4">
//               <Button color="failure" onClick={() => setOpenModal(false)}>
//                 {"Yes, I'm sure"}
//               </Button>
//               <Button color="gray" onClick={() => setOpenModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default ConfirmationPopup;

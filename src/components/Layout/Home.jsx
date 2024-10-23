import React, { useState } from "react";
import InvestmentStatus from "../miniComponents/InvestmentStat";
import FactCounter from "../miniComponents/StatsComponent";
import TestimonialCarousel from "./Testimonials";
import Pricing from "./Pricing";
import FlowerGallery from "../miniComponents/Swiper-components/FlowGallery";
import InvestmentArticle from "../miniComponents/InvestmentArticle";
import Modal from "../miniComponents/Modal";
import '../styleComponents/Home.css'



const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div className="relative">
        <div>
          <Pricing openModal={openModal} />
        </div>
        <div className="flower-gallery-container">
          <FlowerGallery />
        </div>
      </div>
      
      <FactCounter />
      <InvestmentStatus />
      <TestimonialCarousel />

      {/* Modal for InvestmentArticle */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <InvestmentArticle />
        </Modal>
      )}
    </div>
  );
};

export default Home;

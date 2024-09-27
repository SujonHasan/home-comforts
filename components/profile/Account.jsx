"use client";
import React, { useEffect, useState } from "react";
import PersonalModal from "./PersonalModal";
import { useAppContext } from "../productContextProvider/ProductContextProvider";
import ShippingModal from "./ShippingModal";
import BillingModal from "./BillingModal";

function Account({user}) {
  const [showPersonalModal, setShowPersonalModal] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [showBillingModal, setShowBillingModal] = useState(false);

  const { profile, setProfile, shipping, setShipping, billing, setBilling } =
    useAppContext();

  useEffect(()=>{
    
    const userInfo = {name: user?.name, email: user?.email}
    setProfile(userInfo);
    localStorage.setItem("profile", JSON.stringify(userInfo));

  }, [user, setProfile])

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const savedAddress = localStorage.getItem("shipping");
    if (savedAddress) {
      setShipping(JSON.parse(savedAddress));
    }

    const savedBilling = localStorage.getItem("billing");
    if (savedBilling) {
      setBilling(JSON.parse(savedBilling));
    }


  }, [profile, setProfile, shipping, setShipping, billing, setBilling]);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };

  //shipping
  // useEffect(() => {
  //   const savedAddress = localStorage.getItem("shipping");
  //   if (savedAddress) {
  //     setShipping(JSON.parse(savedAddress));
  //   }
  // }, [shipping, setShipping]);

  const handleShippingUpdate = (updateAddress) => {
    setProfile(updateAddress);
    localStorage.setItem("shipping", JSON.stringify(updateAddress));
  };

  //billing
  // useEffect(() => {
  //   const savedBilling = localStorage.getItem("billing");
  //   if (savedBilling) {
  //     setBilling(JSON.parse(savedBilling));
  //   }
  // }, [billing, setBilling]);

  const handleBillingUpdate = (updateBilling) => {
    setBilling(updateBilling);
    localStorage.setItem("billing", JSON.stringify(updateBilling));
  };

  return (
    <div className="container  items-start gap-6 pt-4 pb-16">
      <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Personal Profile
            </h3>

            <div className="flex items-center justify-center">
              <button
                className="text-primary"
                onClick={() => setShowPersonalModal(true)}
              >
                Edit
              </button>
              {
                showPersonalModal && <PersonalModal
                setShowPersonalModal={setShowPersonalModal}
                handleProfileUpdate={handleProfileUpdate}
                />
              }
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">{profile.name}</h4>
            <p className="text-gray-800">{profile.email}</p>
            <p className="text-gray-800">{profile.phone}</p>
          </div>
        </div>

        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Shipping address
            </h3>
            <div className="flex items-center justify-center">
              <button
                className="text-primary"
                onClick={() => setShowShippingModal(true)}
              >
                Edit
              </button>

              {
                showShippingModal && <ShippingModal
                setShowShippingModal={setShowShippingModal}
                handleShippingUpdate={handleShippingUpdate}
              />
              }
              
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">{shipping.name}</h4>
            <p className="text-gray-800">{shipping.address}</p>
            <p className="text-gray-800">{shipping.zip}</p>
            <p className="text-gray-800">{shipping.phone}</p>
          </div>
        </div>

        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Billing address
            </h3>
            <div className="flex items-center justify-center">
              <button
                className="text-primary"
                onClick={() => setShowBillingModal(true)}
              >
                Edit
              </button>
              {
                showBillingModal && <BillingModal
                setShowBillingModal={setShowBillingModal}
                handleBillingUpdate={handleBillingUpdate}
              />
              }
              
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">{billing.name}</h4>
            <p className="text-gray-800">{billing.address}</p>
            <p className="text-gray-800">{billing.zip}</p>
            <p className="text-gray-800">{billing.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

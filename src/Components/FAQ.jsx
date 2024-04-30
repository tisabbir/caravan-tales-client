

const FAQ = () => {
    return (
        <div className="width-fixer mt-12">
            <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions about Caravan Tales</h1>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How can I book a tour on Caravan Tales?
  </div>
  <div className="collapse-content"> 
    <p>Booking a tour with Caravan Tales is easy! Simply browse our website to find the perfect tour for you, then click on the Book Now button and follow the instructions to complete your booking.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What kind of tours does Caravan Tales offer?
  </div>
  <div className="collapse-content"> 
    <p>Caravan Tales offers a wide range of tours, including cultural tours, adventure tours, wildlife tours, and more. Whether you are interested in exploring ancient ruins, trekking through remote wilderness areas, or experiencing local culture and cuisine, we have the perfect tour for you.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is it safe to travel with Caravan Tales?
  </div>
  <div className="collapse-content"> 
    <p>Yes, your safety is our top priority at Caravan Tales. We work with experienced guides and use carefully vetted accommodations and transportation providers to ensure that you have a safe and enjoyable travel experience. Additionally, we closely monitor travel advisories and provide 24/7 support to our customers during their travels.</p>
  </div>
</div>
        </div>
    );
};

export default FAQ;
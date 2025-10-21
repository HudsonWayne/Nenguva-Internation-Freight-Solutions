import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({
    ShipmentCollectionName: "",
    ShipmentCollectionEmail: "",
    ShipmentCollectionMobile: "",
    ShipmentCollectionPostcode: "",
    ShipmentCollectionAddress1: "",
    ShipmentCollectionAddress2: "",
    ShipmentCollectionAddress3: "",
    ShipmentCollectionTown: "",
    ShipmentCollectionCounty: "",
    ShipmentCollectionCountry: "United Kingdom",
    ShipmentDeliveryName: "",
    ShipmentDeliveryEmail: "",
    ShipmentDeliveryMobile: "",
    ShipmentDeliveryPostcode: "",
    ShipmentDeliveryAddress1: "",
    ShipmentDeliveryAddress2: "",
    ShipmentDeliveryAddress3: "",
    ShipmentDeliveryTown: "",
    ShipmentDeliveryCounty: "",
    ShipmentDeliveryCountry: "Zimbabwe",
    ShipmentCollectionDate: "",
    ShipmentContents: "",
    ShipmentInsuranceOptout: "N",
    ShipmentGoodsValue: "",
    ShipmentPolicyValue: "25",
    ShipmentGuarantee: "0",
    ShipmentCourierNotes: "",
    CustomsDocType: "",
    CustomsExportReason: "Sold",
    CustomsCountryOfManufacture: "United Kingdom",
    SenderPrivateIndividual: "Y",
    CustomsEoriVatNo: "",
    CustomsSenderCompanyName: "",
    RecipientPrivateIndividual: "Y",
    CustomsRecipientTaxRef: "",
    CustomsRecipientCompanyName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="container">
      <form
        id="addressForm"
        method="post"
        action="https://www.parcelmonkey.co.uk/quotev3.php?sub=address"
        className="form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="csrf_token" value="61c16ddbed7e92cbbe9a56c708f4a71f" />

        <div className="progress-bar">
          <ul>
            <li className="previous"><span>Parcel Info</span></li>
            <li className="current"><span>Addresses</span></li>
            <li><span>Confirmation</span></li>
          </ul>
        </div>

        <h1>Book <span>Your</span> Delivery</h1>

        {/* Collection Address */}
        <fieldset>
          <h2>1. Collection Address</h2>
          <label>Name *</label>
          <input type="text" name="ShipmentCollectionName" value={form.ShipmentCollectionName} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="ShipmentCollectionEmail" value={form.ShipmentCollectionEmail} onChange={handleChange} />
          <label>Telephone *</label>
          <input type="text" name="ShipmentCollectionMobile" value={form.ShipmentCollectionMobile} onChange={handleChange} required />
          <label>Postcode *</label>
          <input type="text" name="ShipmentCollectionPostcode" value={form.ShipmentCollectionPostcode} onChange={handleChange} required />
          <label>Address Line 1 *</label>
          <input type="text" name="ShipmentCollectionAddress1" value={form.ShipmentCollectionAddress1} onChange={handleChange} required />
          <input type="text" name="ShipmentCollectionAddress2" placeholder="Address Line 2 (optional)" value={form.ShipmentCollectionAddress2} onChange={handleChange} />
          <input type="text" name="ShipmentCollectionAddress3" placeholder="Address Line 3 (optional)" value={form.ShipmentCollectionAddress3} onChange={handleChange} />
          <label>Town *</label>
          <input type="text" name="ShipmentCollectionTown" value={form.ShipmentCollectionTown} onChange={handleChange} required />
          <label>County</label>
          <input type="text" name="ShipmentCollectionCounty" value={form.ShipmentCollectionCounty} onChange={handleChange} />
          <label>Country</label>
          <input type="text" name="ShipmentCollectionCountry" value={form.ShipmentCollectionCountry} readOnly />
        </fieldset>

        {/* Delivery Address */}
        <fieldset>
          <h2>2. Delivery Address</h2>
          <label>Name *</label>
          <input type="text" name="ShipmentDeliveryName" value={form.ShipmentDeliveryName} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="ShipmentDeliveryEmail" value={form.ShipmentDeliveryEmail} onChange={handleChange} />
          <label>Telephone *</label>
          <input type="text" name="ShipmentDeliveryMobile" value={form.ShipmentDeliveryMobile} onChange={handleChange} required />
          <label>Postcode / ZIP Code *</label>
          <input type="text" name="ShipmentDeliveryPostcode" value={form.ShipmentDeliveryPostcode} onChange={handleChange} required />
          <label>Address Line 1 *</label>
          <input type="text" name="ShipmentDeliveryAddress1" value={form.ShipmentDeliveryAddress1} onChange={handleChange} required />
          <input type="text" name="ShipmentDeliveryAddress2" placeholder="Address Line 2 (optional)" value={form.ShipmentDeliveryAddress2} onChange={handleChange} />
          <input type="text" name="ShipmentDeliveryAddress3" placeholder="Address Line 3 (optional)" value={form.ShipmentDeliveryAddress3} onChange={handleChange} />
          <label>Town *</label>
          <input type="text" name="ShipmentDeliveryTown" value={form.ShipmentDeliveryTown} onChange={handleChange} required />
          <label>County</label>
          <input type="text" name="ShipmentDeliveryCounty" value={form.ShipmentDeliveryCounty} onChange={handleChange} />
          <label>Country *</label>
          <input type="text" name="ShipmentDeliveryCountry" value={form.ShipmentDeliveryCountry} readOnly />
        </fieldset>

        {/* Additional Info */}
        <fieldset>
          <h2>3. Additional Information</h2>
          <label>Collection Date *</label>
          <input type="date" name="ShipmentCollectionDate" value={form.ShipmentCollectionDate} onChange={handleChange} required />
          <label>Contents *</label>
          <input type="text" name="ShipmentContents" value={form.ShipmentContents} onChange={handleChange} required />
        </fieldset>

        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
}

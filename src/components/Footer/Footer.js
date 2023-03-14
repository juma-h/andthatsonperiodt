import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  //check if year this current , if  not subtracts?
  const yearTxt = currentYear === 2023 ? "2023" : "2023 - " + currentYear;

  return (
    <div>
      <footer class="footer">
        © {yearTxt} andthatsonperiodt.
        <br></br>
         Michelle Juma | All Rights Reserved.
      </footer>
    </div>
  );
}

export default Footer;

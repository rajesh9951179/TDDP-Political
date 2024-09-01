import React from 'react';

const Donate = () => (
  <section id="donate">
    <h2>Donate</h2>
    <p>Your contributions help us make a difference. Support our mission by making a donation today.</p>
    <form>
      <label>
        Amount:
        <input type="number" min="1" placeholder="Enter amount" />
      </label>
      <button type="submit">Donate</button>
    </form>
  </section>
);

export default Donate;

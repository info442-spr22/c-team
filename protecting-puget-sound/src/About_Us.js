import React from 'react'

function About_Page(props) {
  return (
    <div>
      <header>
      <h1 class = "top-specie">About Us</h1>
      <img class = 'adjust' logo src={require('./logo.jpg')}/>

    </header>
    <section class = 'area'>
      <h2 class = 'medium'>Our Mission</h2>
      <p class = "mission">Promote sustainable fishing practices in the Puget Sound area.</p>
      <h2 class = 'second'>Why?</h2>
      <p class = 'about'>Puget Sound marine populations have long been in decline or at best hovering at dangerous levels.
         One of the factors that adversely affects these fish/crustacean populations is the overfishing of
         vulnerable species by recreational fishers.
        In 2010, the Puget Sound Partnership created a set of initiatives and metrics to monitor the health of Puget Sound, many of which related to Fish populations.
        In 2021, the agency reported that metrics related to fish health were either short of the 10-year goals or even trending in the reverse direction (PSP, 2021).
        Conventional practices of people who fish recreationally have been contributing to these issues.
        Declining fish populations will create negative feedback loops in which fishermen will fish more in certain areas, leading to worsening conditions for the fish.
      </p>
      <p class = 'about'>
        Issues related to the health of the Puget Sound disproportionately affect ingenious communities who engage with the Puget Sound for sustenance and cultural practices.
        Not only do fish populations have an influence on the lives of people, but they’re also integral for other sea life in the Puget Sound such as Orcas (Mapes, 2021).

        Existing solutions in place attempt to control when and where people fish in Puget Sound throughout the year (eRegulations, 2022). There are ten total zones throughout the Pudget Sound.
        However, these seasonal zones don’t provide fishing crews with real-time information about how plentiful or vulnerable a particular fish population might be.
        Organizations like the World Wide Fund for Nature attempt to lobby and negotiate with larger fish producers and distributors to affect change on a commercial level, which is critical for fish population safety (Kuruc, 2022).
        However, these efforts often don’t have trickle-down effects on recreational fishing.
      </p>

    </section>
    <div>
      <h2 class = 'medium'>Our Team</h2>
      <section class="card_container">
        <div class="team_member">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQER9EsZapxUJA/profile-displayphoto-shrink_800_800/0/1623096337516?e=1657152000&v=beta&t=Liilo2866avEAhOGTkClWQtuQIlQxc1Zt-urtRdrHL4" alt="Person"/>
          <p class= "name">Annie Bequette (Dev)</p>
        </div>
        <div class="team_member">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQF_g9aTM_H84A/profile-displayphoto-shrink_800_800/0/1624851318558?e=1657152000&v=beta&t=2Zx2e-Xvymuh1L5iLD-Mhg4kTqXUbk8h4uTOnc5jDhs" alt="Person"/>
          <p class= "name">Emily Dooley (Prod)</p>
        </div>
        <div class="team_member">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH2t0H29q9Rzg/profile-displayphoto-shrink_800_800/0/1618880003180?e=1657152000&v=beta&t=n-nYVJedzgwFKds3aMMWinxSJkSu0rPqwin5ZhKPHZ4" alt="Person"/>
          <p class= "name">Jacob Strozyk (Dev)</p>
        </div>
        <div class="team_member">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQFhYb_pNDVaBg/profile-displayphoto-shrink_800_800/0/1624630868113?e=1657152000&v=beta&t=FFh-ue_rqfZ-ittC1N8GlXrOG8MsiB1dKuH-X9JHuPE" alt="Person"/>
          <p class= "name">Sebastian Pasion (PM)</p>
        </div>
        <div class="team_member">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQG5kxW6nad3nQ/profile-displayphoto-shrink_800_800/0/1635547764203?e=1657152000&v=beta&t=wEeOzExQksziQcGv1_gziypuL1N6o7tzva1XwFc7YMY" alt="Person"/>
          <p class= "name">Spencer Pudists (Dev)</p>
        </div>
    </section>
  </div>
  <div>
    <h1>Citations:</h1>
    <p className='cite'>How to use these eRegulations - washington fishing. eRegulations. (n.d.). Retrieved April 6, 2022, from https://www.eregulations.com/washington/fishing/how-to-use-these-e-regulations
    </p>
    <p className='cite'>
    Kuruc, M. (n.d.). What is overfishing? facts, effects and overfishing solutions. WWF. Retrieved April 6, 2022, from https://www.worldwildlife.org/threats/overfishing#:~:text=It%20can%20change%20the%20size,like%20sea%20turtles%20and%20corals.
    </p>
    <p className='cite'>
    Mapes, L. (2019, February 26). Decline of salmon adds to the struggle of Puget Sound's Orcas. Saving Seafood. Retrieved April 6, 2022, from https://www.savingseafood.org/news/conservation-environment/decline-of-salmon-adds-to-the-struggle-of-puget-sounds-orcas/
    </p>
    <p className='cite'>
    Puget Sound Partnership. (n.d.). Thriving species and food web. stateofthesoundwagov. Retrieved April 6, 2022, from https://stateofthesound.wa.gov/thriving-species-and-food-web/
    </p>
  </div>
  <footer>
  </footer>
  </div>
  )

}
export { About_Page }
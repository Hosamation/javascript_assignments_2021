// ==========================================
// == Variable And Concatenation Challenge ==
// ==========================================

// variable_and_concatenation_challenge

let theTitle = 'Elzero',
    theDescription = 'Elzero Web School',
    theDAte = '25/10';
let card = `
<div class="card">
  <h3>${theTitle}</h3>
  <p>${theDescription}</p>
  <span>${theDAte}</span>
</div>
`;
document.write(card.repeat(4))
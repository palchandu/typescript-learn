let hero: string;
function hetHero() {
  return "Thor";
}
hero = hetHero();

//to console the log
function logErrorMsg(errormsg: string): void {
  console.log(errormsg);
}

type cardNumber = {
  card_number: number;
};

type cardDate = {
  card_date: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

const cardObject: cardDetails = {
  card_number: 123456,
  card_date: "34455",
  cvv: 4555,
};

function Hello(){

  let myName = 'Ritz';
  let number = 456;
  let fullName = () => {
    return 'Ritika Rai';
  }
  return <p>
    Messageno : {number} This is the msg from browser {fullName()}
    </p>
}

export default Hello;
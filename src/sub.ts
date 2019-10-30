export class Hello {
  constructor(message: string) {
    this.log(message);
  }
  private log(message: string): void {
    document.body.innerHTML = (`${message}`);

    console.log("Log",`${message}`);
  }


}

/**
 * 
 * @param message 
 */
export function viewMessage(message: string): void {
  document.body.textContent = `${message}`;
  // document.body.style.backgroundColor = "cyan";
  console.log(`${message}を出力`);
}
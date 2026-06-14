import cryptoJS from "crypto-js";

export class CommonUtils {
  private secretKey: string;

  constructor() {
    if (process.env.SECRET_KEY) {
      this.secretKey = process.env.SECRET_KEY;
    } else {
      throw new Error("Please provide SECRET_KEY");
    }
  }

  /**
   * Method to Encrypt data
   * @param data
   * @returns decryptedData
   */
  public encryptData(data: string) {
    const encryptedData = cryptoJS.AES.encrypt(data, this.secretKey).toString();
    //console.log(encryptedData);
    return encryptedData;
  }

  /**
   * Method to decrypt encrypted data
   * @param encData
   * @returns decryptedData
   */
  public decryptData(encData: string) {
    const decryptedtData = cryptoJS.AES.decrypt(
      encData,
      this.secretKey,
    ).toString(cryptoJS.enc.Utf8);
    //console.log(decryptedtData);
    return decryptedtData;
  }
}

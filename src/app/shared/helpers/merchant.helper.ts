
export class MerchantHelper {
  public static addMerchantMetadataToModels = (model) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return {
      ...model,
      merchantid: userInfo.merchant_id,
      userid: userInfo.userid,
      userip: '1',
      useragent: 'web',
    };
  };
}

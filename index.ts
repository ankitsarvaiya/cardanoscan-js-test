import { CardanoscanAPI } from "cardanoscan-js";

const API_KEY: string = "";

const instance = new CardanoscanAPI(API_KEY);

/* Block */
instance.getBlockDetails({ blockHeight: 10 }).then((data) => {
  console.log(data);
});

// instance.getLatestBlockDetails().then((data)=>{
//     console.log(data);
// })


/* Address */
// instance.getAddressBalance({ address: '3fd3722348fd9d752cabc224e805ca2a9cf099e9fb3410c5e4e4627d' }).then((data) => {
//     console.log(data);
// })


/* Pool */
// instance.getPoolDetails({poolId:'163cc36624d9332f6ae7770e8df8b8bad7e71711eb6c2ed7971c99d4'}).then((data)=>{
//     console.log(data);
// })

// instance.getPoolStats({ poolId: '948e7da731887b371c16b5dbb70e44f2c94502d88461900ac0a52ef6' }).then((data) => {
//     console.log(data);
// })

// instance.getPools({ pageNo: 56, limit: 5}).then((data) => {
//     console.log(data);
// })

// instance.getExpiringPools({ pageNo: 56, limit: 2 }).then((data) => {
//     console.log(data);
// })

// instance.getExpiredPools({ pageNo: 2 }).then((data) => {
//     console.log(data);
// })


/* Asset */
// instance
//   .getAssetDetails({ fingerprint: "asset12qywf9ghtsu5kxdtm4mxpxk2r3ax4xp0ff0ggk" })
//   .then((data) => {
//     console.log(data);
//   });

// instance.getAssetsByPolicyId({policyId: '7535b764c81d7e663bccd17f7e0956dff3e9709cade93c9b37afe351', pageNo:35}).then((data)=>{
//     console.log(data);
// })

// instance.getAssetsByAddress({address:'b3dd393f812971d893ace2144bd110f1d712f2ce61a86ef68d72a9d2781c8d7f', pageNo:7}).then((data)=>{
//     console.log(data);
// })


/* Transaction */
// instance.getTransactionDetails({hash: '71629a9ce89f17be21147b27017eda0e16e07bc65f0a7682462859523ca7bc7a'}).then((data)=>{
//   console.log(data);
// })

// instance.getTransactionListByAddress({ address: '3d3803e6942438feb07cb29dd1dc04f1c617f1b3f5d77f96b9630b38fb2da828', pageNo: 25 }).then((data) => {
//     console.log(data);
// })


/* Reward Address */
// instance.getStakeKeyDetails({rewardAddress:'886b0c9eda2949ba6347ff09328aa9dbfadd84fe0982783d0829c9e66e'}).then((data)=>{
//     console.log(data);
// })

// instance
//   .getAddressesByStakeKey({
//     rewardAddress: "886b0c9eda2949ba6347ff09328aa9dbfadd84fe0982783d0829c9e66e",
//     pageNo: 59,
//   })
//   .then((data) => {
//     console.log(data);
//   });


/* Network */
// instance.getNetworkDetails().then((data) => {
//   console.log(data);
// });

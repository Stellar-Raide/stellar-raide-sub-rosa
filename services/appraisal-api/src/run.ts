import { configFromEnv } from "./config.js";
import { buildAppraisalServer } from "./server.js";

const config = configFromEnv();
const server = await buildAppraisalServer(config);
server.listen(config.port, () => {
  console.log(
    `stellar-raide-stellar-raide-sub-rosa appraisal API on :${config.port} — POST /appraise costs ${config.price} on ${config.network}`,
  );
  console.log(`  asset ${config.asset}`);
  console.log(`  payTo ${config.payTo}`);
});

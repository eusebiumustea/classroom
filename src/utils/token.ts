import axios from "axios";
import { hostUrl } from "../auth";

export async function refreshAccessToken(validToken: string) {
  try {
    const res = await axios.post(
      `${hostUrl}/refresh-token`,
      {},
      { headers: { Authorization: `Bearer ${validToken}` } }
    );
    if (res.data.accessToken && res.data.timestamp) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);

    return null;
  }
}

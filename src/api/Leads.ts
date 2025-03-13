type PostLeadDto = {
  id_produto?: string;
  name: string;
  email: string;
  fone: string;
  message: string;
};
type LeadResponse = {
  leadId: string;
  requestId: string;
  message: string;
  success: boolean;
};


export interface LeadData {
  name: string;
  email: string;
  fone: string;
  message: string;
}
export type LeadResponseOrUndefined = LeadResponse | undefined;
const API_URL = "https://leads.mitrerealty.com.br/api-leads/leads";

export const postLead = async (
  postLead: PostLeadDto
): Promise<LeadResponse | undefined> => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Basic TEFORElOR19NSVRSRTptZlFXZnhvUHdNbWVZY0FidkF0QWJ3Q2RFYWtKckJBOXg5cGNsOTBvS1V0N2ZsU0d4TEtNdEZZd3k0NFlEc0c3",
      },
      method: "POST",
      body: JSON.stringify({ ...postLead, id_produto: 1226 }),
    });

    if (!response.ok) {
      const errorPayload = await response.json();

      throw new Error(errorPayload.message);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

 
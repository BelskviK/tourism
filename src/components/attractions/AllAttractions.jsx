// src/components/attractions/AllAttractions.jsx
import AttractionCard from "./AttractionCard";
const allAttractions = [
  {
    title: "Svaneti Towers",
    location: "Svaneti, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZYrEzrPWdkxGd5_-NUNkmuHVWmD8l1VpcxnzBDpXih9m_hvhx-Gd3MoXXhcunIxclDPeH9WsKUglJuPWuN2Cd5Tp0W2e1BtFOS50iA2-vAuQ9S7HIKZsZUQvibv5ZiNtW4UzQNgC6fmZswwijj9iIy22KJef_aIcSOSC9LjkUI6MRnPd4TI5Dd3f6iuvhcwP135QzlrcxgflDm3HBSybm9sDauBCn0gUneo9rC5WnNJkucAtHkt7NEHPqSpeJ9pj3wGGs9QRxvEGF",
  },
  {
    title: "Narikala Fortress",
    location: "Tbilisi, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAE4mj0B96T1NIKd04FtbsOTpc9A_24qfErL2QXpOxjrOIoV1xfMlj03SewJkvjd2O2jOAHMlXMspx9h5luj5M_ioGR7nS_qr0eowfCMyInV01txFhG0nMXNFoEGjoJ3kWdV9d08UwztHGIw4sBrpkmi1OPguHGm-2D4uhWvUWp_fYLq1Ye3VRiB8_rM-W8Re6Mhhl-icQnDn3KV_yCZPZM8wG_5gDb9hnRUC1BB4TdwaghFuy_VXpb8VW4RJ8-pjBqMiRxsYkvtZkb",
  },
  {
    title: "Uplistsikhe Caves",
    location: "Gori, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNDbXYy2ujRD7lZOPPVAl_YV-dFBSP72QEx9aAhW1xrYZ0OjK4-oiezlspmroiFMjmYc2eaPqiwyvEjz8tUbDbenXtl0JL9fAe1D3P0oD6yePlC5EPvmLTVqvKXwttFaTL7oI2ZBd8XMpXrgjF9EilrcI1pRui4RzYd53DutSq4OHZxASY3JDbc6zigt2Z2vu1WvABJ4WMPHwokj0m_uk9Eika5Vu1mrwK7IGEzRWMIlflSEaPcr26rL1sOnr50qE_lnj6xjLVlX3a",
  },
  {
    title: "Vardzia Monastery",
    location: "Aspindza, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkiaQa14hO_3uaTEhrQuLVUZJHib-P0VRHC41oOBJbpTpSKe4qVrOt6Ctia6CU2e6CFF9ibLuJYFoJsSbCP5CcHDF04ZESYSNfl93pD4RkjuYMX2n04GJW3GrfX7wMhfDJRNdKo4FlmDYc0ULKeT9nk1xLJGRCEKThRhNAKbmAbvKBT2R5CGH5tST3qFr46ZswU9nkxfEaQsk4rozOVf75C62perow4s004VxQCpwramHXJt23U70REotDseoWnLV-nFspGNKkQvdk",
  },
  {
    title: "David Gareja",
    location: "Kakheti, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgG7o4aUX9_nGm3yP-yp0olhdAu3si7qz9PhKfHDgxJlmUOl8lYMZ4RlAlcH0bw2SitqjWGHVPu5DxHmaM3sOz2khp3RRgvywRqTpgaJHHNnDJrMsRVUnenvcBqDxhw3Bu2cnyc92sno5bo3hdnYO958YJAVda9PLr8Vc_db4ngsrFlcVckZ7e-icWUvzTvmrqvyvrE3ZtkAVnDoqLl1Oxsb_SX8MrTrm2b415yP3vOEr27ldvNEeOfhCW81MO9KtUBy05BPYi4mIE",
  },
  {
    title: "Katskhi Pillar",
    location: "Chiatura, Georgia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAb9B7IcfxHdPnrTwUX2v5jaMGOPJT3QJAsUzYoKUsfKgc6KaIrhBHn8ZUPcuAYApgVmr5LfRBkmwF-nNcR5H_d9vnbWWfnxxX4cjtS66fqqbwO_ezgESAjpC5ixj_2IQwx4TLdVtQWXX4ctWittEkWvG305apB8ef-E_dkHfujD6yhep6FAb7BTDFiWxtH2B1YQ6WbTgGxEeaeLf4-Jnecl3pqpqBlA0T8kfPsy2p7pBj1xZcCMnhu3iaAQp5dDib0hmyR6q8UuKCY",
  },
];

export default function AllAttractions() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {allAttractions.map((item, index) => (
        <AttractionCard key={index} {...item} />
      ))}
    </div>
  );
}

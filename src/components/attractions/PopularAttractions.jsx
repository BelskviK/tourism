// src/components/attractions/PopularAttractions.jsx
const popularAttractions = [
  {
    name: "Caucasus Peaks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmGGU5NG3Hs6M-rQrzYDLqHPdVctepUQ42U8PRq2wsZXVg-TjX92mib2SFGAMsY0ztkXCr5dDP1aAvY2QDw2dsa-iPmi3nP2ZCdzeGhPrkxTNrJw6-gP5HYDs5xiN1Gm_-7ehNyRifte4TTB_Zr3rHER3kAf8M3MyI_qzw2O-8l7nSLiD399fBZCAHEi1zmO5yEAUgKlYCEKyxzItaEPc37j5Lhd76WD7twqOf9UTJG9DkkYwjGWlt7bdbCqkVElBudrf0M0ybetm",
  },
  {
    name: "Tbilisi Nights",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_JwVMj8xIO9lTja2tWY0pfPXTkNgsprVeOaP_CcU-UF46Kk-ItGlXE4x85U2rCBt2B3QV-XqN8t7fNsGFPWqFgAK3ID3CQT7AqQy3WHKdFbaXxkrHeKYTz_mQTdSxtq350GT-jrcIUC3CNB7nKl2R-EK9eBrNg7TLmJVojpjPq0V4raQfl2ckqXlm2m0-PG5ctwyqfmvP7E9Df49pnDQhf9yQig87o3NoqyDzvDcZroUPD1jzxmV8Iw-X-cgg09wiZyAifWffZUo",
  },
  {
    name: "Black Sea Shores",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCThTyv488y5FzYveQkicvj9ooD854040pf6ZMqI5qSI7Lm6AZea8BtJV6puZNeiZULEFp3ZPLpPLDZa-_81UfQJ0_OuepEiaY7Nsg8Fm844xutu0YTrD8WGN13JjsApVABqxFLybsDNafJ3goHBPzu7swIf-MdQ1UVzWU5EMnXm_1mshnMNi13ZyExk-v7UoUhCcuxh_a6WWHPxH-hC1ofjcLAT5YCxoS6praBW0YHCb8Z-P31VTB8R70PYFGxXRV8cp3Db16YDtll",
  },
  {
    name: "Borjomi Woods",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIBLZAFIaDiZSJkuMiwWKE3Cp8CGJtI7JgTBt7S4N3lUf9p0f0qp6dHHdeijElWMJ1ZUMtXySe40qqrjxVMfaBWTaHdQp2Vhe4dYWPypEMYX456quArHzTqZ5I1hJDL2kRWVEds3i1boJWgLjr4XyHhbBurtaRFXcfzjlGQTHlG9eg_b0NvkGLLZQva42ltdjdQeG1sX86CoOIyeaxnz6XH3NJtrex2AR346eDXNlzZ77sye-yiDIJgzcSOoDEHavqBO_HDQth2jaH",
  },
];
export default function PopularAttractions() {
  return (
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {popularAttractions.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <p className="text-[#101519] text-base font-medium leading-normal">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

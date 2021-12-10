
import Faqs from "react-faq-component";

export default function Faq() {
    return (
        <div id="faq" class="section wf-section">
            <div class="container-default w-container">
                <div class="inner-container">
                    <div class="inner-container-500px mg-bottom-medium-64px">
                        <div data-w-id="6252f2ff-ec78-a559-15f2-19b41b2f5490" class="dash---small-56px mg-bottom-24px">
                            <div class="white-fill-block">
                            </div>
                        </div>
                        <h2 data-w-id="6252f2ff-ec78-a559-15f2-19b41b2f5492">Frequently Asked Questions</h2>
                    </div>
                    <div class="faq-main-wrapper">
                        <div class="flex-column justify-start">
                        <Faqs
                            data={data}
                            styles={styles}
                            config={config}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = {
    title: "",
    rows: [
        {
            title: "01 What is Flinch?",
            content: `<ul><li>Flinch is the world's first movie franchise on the blockchain. In the future we will look back and remember the days when
            fans had no participation or governance over the art they love. Movie franchises grow into epic stories with a variety of characters. They allow for spinoffs, games,
            merchandise and other ancillary works. Now we will build a franchise as a community.</li><br/></ul>`,
        },
        {
            title: "How do I purchase a Flinch NFT?",
            content: `<ul><li>You may mint a Flinch NFT on our NFT page. We have two mints, one for Posters, one for Characters. There are 3 poster skews with 3,333 of each and 5,000 characters.
            All NFTs reward holders via the Cinema. Poster NFT holders have first access to mint a Character. Characther holders have governance over the franchise, access to in person movie premieres, premiere parties and free merch.</li><br/>
            <li>As subsequent films in the franchise release, new poster NFTs will airdrop to holders.</li><br/></ul>`,
        },
        {
            title: "How are Flinch NFTs distributed?",
            content: `<ul><li>Fair distribution. There are no bonding curves here. Buying a poster will cost .04ETH + Gas. Buying a Character will cost .08ETH + Gas.</li><br/></ul>`,
        },
        {
            title: "What are the benefits of owning a Flinch NFT?",
            content: `<ul><li>Owning a Flinch NFT gives you access to and benefits from a movie franchise in both the digital and real world.</li><br/>
            <li> We are building a large movie studio platform for lots more films. This platform will have a native token. Flinch NFTs will be able to be staked to earn this coin.</li><br/>
            <li> Films are a collaborative art form. Our community must collaborate to make the best franchise we can. The metaverse is the limit.</li><br/>
            <li>NFT holders are rewarded by the Cinema.</li><br/></ul>`,
        },
        {
            title: "What will happen to secondary market royalties?",
            content: `<ul><li>Royalties will be set to 10% for secondary sales</li><br/></ul>`,
        },
        {
          title: "What is the Cinema?",
          content: `<ul><li>We built a Cinema that streams our films to our NFT holders for free or for non NFT holders who pay in crypto. The Cinema rewards our NFT holders. Imagine a day when 
          we can sit in a virtual Cinema, in our avatar, with ten friends from around the world, or one million random people, to watch a film. This is just the beginning.</li><br/>
          <li>When you watch Flinch in the Cinema you are added to the whitelist. Post-mint all Cinema visitors will be eligible for
          random airdrops of Poster and Character NFTs and much more. Going to the movies is the gift that keeps giving.</li><br/>
          <li>Currently Matic is the best payment solution for the cinema. We're working on other chain and coin payment solutions to broaden our reach.</li><br/>
          <li>If you pay to watch, you will be able to watch any time your wallet is connected to the Cinema.</li><br/></ul>`
      },
    ],
  };
  
  const styles = {
    bgColor: 'transparent',
    titleTextColor: "#ffffff",
    rowTitleTextSize: '18px',
    rowTitlePaddingTop: '80px',
    rowTitleColor: "#ffffff",
    rowContentColor: '#ffffff',
    arrowColor: "#ffffff",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    // tabFocus: true
  };
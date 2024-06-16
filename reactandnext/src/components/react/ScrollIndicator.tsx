import { ElementRef, useEffect, useRef } from "react";

function ScrollIndicator() {
  const refContainer = useRef<ElementRef<"div">>(null);
  const increaser = useRef<ElementRef<"div">>(null);
  const scroll = () => {
    if (refContainer.current) {
      const totalScroll =
        refContainer.current.scrollHeight - refContainer.current.clientWidth;
      if (increaser.current) {
        increaser.current.style.width = `${
          (refContainer.current.scrollTop / totalScroll) * 100
        }%`;
      }
    }
  };
  useEffect(() => {
    refContainer.current?.addEventListener("scroll", scroll);
    return () => {
      refContainer.current?.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div
      ref={refContainer}
      className="relative overflow-hidden overflow-y-scroll w-[500px] h-[500px] bg-white"
    >
      <div className="sticky top-3 w-[98%] h-2 mx-auto rounded-lg overflow-hidden">
        <div ref={increaser} className=" h-full bg-purple-600"></div>
      </div>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima
        provident ad ipsam, quod possimus incidunt ipsa libero cupiditate
        ratione sequi, deleniti dolorem rerum quam aspernatur iusto expedita in
        minus! Quos sequi eligendi iure corrupti laborum ipsa non, fugit ullam
        velit architecto ratione facilis nostrum rem dolores expedita aliquid,
        nam amet enim? Facere nihil nisi recusandae eligendi, vero minima rerum?
        Accusamus, quas voluptate temporibus ut illo reprehenderit impedit
        labore beatae totam iste reiciendis architecto, quis ad? Distinctio
        totam, soluta nostrum dolores nihil nam minus maiores sunt, excepturi
        reprehenderit odio voluptatibus! Assumenda illo eum minima. Veritatis,
        facere quidem. Harum quas necessitatibus itaque autem quisquam
        voluptatum rem officiis nemo, nihil sed voluptatem laboriosam cupiditate
        optio perferendis impedit perspiciatis quia, ducimus nesciunt odit.
        Repellendus dolor molestias quisquam esse aut repudiandae itaque? Enim
        cupiditate obcaecati labore voluptates sed modi doloribus magnam
        tempora. Doloribus deleniti similique iure alias obcaecati aliquam
        nihil? Fugiat ea temporibus omnis. Incidunt voluptatibus, eligendi
        nesciunt atque nisi id nulla magnam tempora vel at nobis odit voluptas
        suscipit explicabo quisquam repudiandae distinctio numquam dolor ratione
        quibusdam. Dolorem corrupti ipsum quae itaque alias. Esse qui eligendi
        ex sapiente nam exercitationem tempore voluptatem labore suscipit,
        blanditiis, enim dolor eius totam dolores? Reprehenderit optio
        perspiciatis ratione ea nesciunt eum quod distinctio recusandae, velit,
        placeat aperiam. Nesciunt sed molestias unde nisi repellendus assumenda
        fuga aut ducimus sint fugit quae ea in dolorum numquam, inventore
        blanditiis veritatis consequuntur ullam eveniet. Adipisci reprehenderit
        qui culpa, vitae asperiores iste! Impedit quae voluptatibus vel
        molestias dolorem distinctio accusamus? Dicta facilis beatae doloremque
        maxime adipisci dolor aperiam animi. Repellendus non placeat dolorum,
        cum dicta molestias quas mollitia adipisci magnam, similique quod?
        Dolorum quasi odio velit doloremque quibusdam dolorem similique eos ab
        magnam. Impedit voluptas veniam amet debitis dolorum sequi. Maxime amet
        explicabo eos officiis porro placeat culpa veritatis harum magnam magni?
        Excepturi aspernatur dolorum consequatur, possimus magnam laboriosam
        quidem totam cupiditate, soluta a harum! Iusto reiciendis odit deleniti
        totam facilis tempora excepturi veniam asperiores, numquam nemo eligendi
        quia, in voluptatibus voluptate? Laudantium consectetur modi enim nemo
        id eius eligendi ad nulla cupiditate magni, reiciendis officiis, ipsa ab
        inventore labore doloribus. Aperiam consequatur pariatur cupiditate
        libero delectus perferendis quaerat eius ipsa mollitia. Minima odio
        aliquam omnis repellendus, fugit ipsa quae deserunt nihil quasi
        doloremque? Dolorum maiores magni architecto adipisci perferendis!
        Corporis autem laudantium veniam blanditiis accusamus ducimus itaque
        vitae deleniti qui explicabo! Deserunt incidunt laudantium omnis itaque
        dolorum rem sapiente alias molestias dolore maiores, earum quia quae
        modi tempora officiis pariatur nesciunt enim doloremque odit ullam
        tempore mollitia quidem facere praesentium? Praesentium. Libero,
        numquam. Ad cumque qui ex provident, doloribus aliquid ipsum dolor odio
        deserunt consectetur, quam fuga quaerat voluptatem necessitatibus
        accusantium soluta temporibus quibusdam similique? Nulla perferendis
        error assumenda voluptate beatae. Placeat, modi ullam pariatur nam
        obcaecati nulla totam dicta, quisquam qui beatae alias quod. Quae,
        magnam pariatur totam omnis rerum ratione asperiores veritatis atque sit
        voluptatem tenetur expedita dolor voluptate. Dolores, deserunt ipsum,
        facere laboriosam eum quasi nobis esse eius dolor eveniet inventore
        delectus maxime explicabo necessitatibus nostrum! Laudantium sapiente
        quod vero similique recusandae autem impedit quidem porro eaque
        asperiores. Ducimus ipsa porro natus alias amet enim illum saepe quos
        qui quisquam iste consequuntur atque dolor esse eius iusto corporis,
        aperiam placeat sed similique laboriosam autem nemo! Sit, debitis
        itaque. Consequuntur tempore reprehenderit earum vitae impedit ad maxime
        laudantium, modi dolor veritatis? Rem, rerum in sequi voluptates nulla
        qui ipsum dolorem eveniet ducimus maxime saepe explicabo veritatis.
        Esse, similique eos? Sit, ex id enim hic ipsa adipisci quam illo laborum
        est nam optio pariatur eos nemo vitae quas dolorem perspiciatis quos aut
        obcaecati doloremque exercitationem iusto itaque nesciunt explicabo!
        Ratione! Porro nemo culpa mollitia dolorum, veniam, pariatur quidem
        magnam tempora dolores iste at ipsa nam placeat, ab possimus velit
        consectetur voluptatibus aspernatur. Minima omnis cupiditate tenetur ab
        sequi veritatis totam. Aspernatur qui iste, sint ullam aut dolorum
        veniam maiores magnam ex laudantium laboriosam repudiandae, tempora,
        magni fuga voluptas debitis! Labore aspernatur modi omnis reprehenderit
        facilis enim possimus unde facere sapiente. Hic excepturi vitae deserunt
        et ullam neque nostrum commodi cum mollitia, illum repudiandae in nulla
        nemo quia, deleniti cumque eligendi voluptates repellendus? Commodi
        laborum facilis facere ab sit, tempore iusto. Maiores nam corrupti omnis
        fuga dolorum iure. Quae aperiam tempore dolore natus perferendis
        veritatis necessitatibus possimus enim blanditiis placeat. Voluptatum
        voluptates nobis eum excepturi neque placeat animi quibusdam facere est.
        Voluptas dolore incidunt voluptatibus earum, officiis reiciendis
        cupiditate hic amet voluptatum? Delectus quaerat iure quos fugit nam!
        Nulla, beatae similique perferendis recusandae voluptate ea assumenda
        possimus nesciunt totam nostrum facere. Odio ipsum maxime ratione.
        Consectetur dignissimos harum nemo culpa quas neque facilis, enim itaque
        ullam cum assumenda adipisci cumque ipsam accusamus, nam sed vitae?
        Animi aliquam sunt at error recusandae. Eos fuga ut, saepe iure
        accusamus voluptatum commodi distinctio aperiam voluptas ipsam
        laboriosam similique perferendis veritatis obcaecati esse consequatur
        quibusdam? Fuga accusantium accusamus qui quas laborum facere, placeat
        enim sapiente. Voluptatem doloribus delectus iste vero praesentium
        possimus ipsa in eveniet earum facilis, nemo magnam sint reiciendis,
        velit dolore consequuntur beatae similique recusandae. Nostrum
        recusandae voluptas culpa tempora architecto ullam deserunt. Alias nam
        vel nostrum quaerat adipisci omnis delectus labore odio quasi, nesciunt,
        molestias voluptas fugiat cupiditate possimus maiores a quisquam
        aspernatur error magni corporis cum dolorem, porro accusamus. Modi,
        voluptate. Earum unde minima voluptatem nostrum dignissimos nihil,
        reiciendis praesentium enim voluptatibus atque fugit deserunt! Quis eius
        voluptatibus quam dolore consequuntur eaque itaque magnam mollitia iusto
        incidunt ex, dicta aliquid aspernatur. Deserunt omnis, corporis vero
        perferendis magni modi ipsam unde cumque mollitia obcaecati nobis
        dignissimos fuga et fugit quidem itaque, earum explicabo veritatis,
        facere officia odio aspernatur expedita repudiandae provident. Natus.
        Officiis nihil sit impedit dicta laborum quisquam earum hic consequuntur
        architecto, iure quidem consequatur fugit ea officia? Facilis, eius
        excepturi temporibus voluptates modi quidem accusamus beatae, vitae iure
        possimus nulla! Rerum vero iure laudantium a corrupti sed enim delectus
        repellat eius iste et mollitia doloribus, officiis eveniet cum quod quas
        voluptates! Laboriosam ut, velit est placeat minima suscipit accusamus
        quas! Voluptates iste incidunt cupiditate ullam adipisci esse rerum
        fugiat omnis debitis veniam aliquam libero consequuntur, quasi placeat,
        hic maiores, iure quo quam asperiores. Tenetur eveniet aperiam
        recusandae, error numquam a! Rem illo saepe voluptas quo. Sequi magni
        non odio necessitatibus vel? Ab cumque voluptate, ad neque quibusdam
        corrupti necessitatibus accusamus consectetur laborum quam nobis.
        Praesentium ex deserunt voluptas ad incidunt? Voluptas, expedita neque
        quod error, eligendi sapiente, eaque minima mollitia quis beatae
        impedit. Tenetur, modi. Rem possimus sed dolorem, itaque vel quas
        quaerat assumenda voluptate nulla numquam aspernatur velit consequuntur?
        Illum beatae ad consequatur cumque! Aperiam, eum dolores nesciunt ipsum
        hic accusamus earum ipsa voluptates, quisquam natus quis velit cum
        veritatis, itaque dolorem enim autem. In nobis qui reiciendis! Ullam?
        Molestiae explicabo labore asperiores, pariatur nesciunt ducimus earum
        in a facere obcaecati! Praesentium similique tempore asperiores quaerat
        facere, libero cum quidem dolor voluptas? Expedita tenetur facere earum,
        eligendi vitae ad. Accusantium hic neque quidem dolor voluptates dolores
        vitae praesentium dolorem quas amet esse facilis, obcaecati
        exercitationem ab eius quis culpa, voluptatum nobis? Asperiores eligendi
        dolorum ipsa aperiam vero nulla delectus? Sint quaerat quia error
        maiores corporis fugit beatae quibusdam in, nobis vel laudantium, fuga,
        suscipit maxime sunt commodi itaque natus? Autem, ipsa! Odit sit modi
        provident harum cum dolore necessitatibus? Deserunt cumque quia eum
        delectus eos earum magnam aspernatur a temporibus in tempore dolores
        accusamus, exercitationem beatae hic corporis id itaque repellat quidem
        obcaecati suscipit quae fugit. Repudiandae, quae pariatur! Repudiandae
        fugit assumenda libero recusandae in molestiae, ipsam iste laborum ut,
        distinctio natus minus eaque expedita ad praesentium qui perspiciatis
        velit earum odio sequi voluptates. Officiis vel incidunt quas quam!
        Obcaecati aliquam nisi voluptatem, illum quo reiciendis modi harum id
        eius, veritatis fuga beatae, maiores maxime facilis? Excepturi eos
        explicabo libero accusamus quam fuga sequi? Esse quia illum illo vitae.
        Corrupti, vero eius aperiam sed reprehenderit praesentium voluptatem
        nostrum, magnam eveniet dolores amet iste possimus. Beatae repellat
        ipsum quasi explicabo quo, sequi reprehenderit, distinctio sit,
        cupiditate ut eaque maiores iure? Natus debitis harum iste ab excepturi?
        Quis deserunt velit asperiores fugiat accusamus. Illum eos ea totam quia
        voluptatum ut architecto error officiis natus rem obcaecati modi porro,
        tenetur accusantium maiores. Consequuntur quia, repellat mollitia nam
        eum officia, aliquid minima reiciendis alias aperiam voluptates facere.
        Quod accusantium at, magni iusto consequuntur atque in alias, asperiores
        necessitatibus ipsam perspiciatis, vitae maiores error! Quidem voluptas
        expedita rem vitae vero iusto corrupti cum minima quia impedit, quasi
        amet commodi. Fuga officiis voluptas obcaecati veritatis sapiente veniam
        id culpa et enim totam, cupiditate repellendus consequuntur! Maxime et
        impedit, eius saepe illum a non eum itaque iste? Odio libero quibusdam
        sunt dicta accusantium veniam dolorem deleniti consequatur. Porro
        aliquam itaque quis vitae sapiente cum. Eveniet, at. Nobis, quam fuga,
        consequuntur recusandae velit necessitatibus maiores autem laudantium
        corrupti animi est amet nesciunt eveniet unde enim quis labore? Sint
        dolor obcaecati eius velit consectetur et quidem odio nostrum? Soluta
        corrupti animi hic eum, voluptas qui. Voluptatum cumque aspernatur
        officia eaque ex, consectetur nobis. Rerum perferendis nesciunt quis
        natus aut dolore cumque pariatur. Quos, quis voluptatibus. Facere,
        aperiam ipsa. Quia commodi, quos repellat, exercitationem culpa
        blanditiis impedit mollitia consequuntur tempora debitis aperiam
        laboriosam. Vel reprehenderit maxime cupiditate, aut expedita nesciunt
        quaerat rerum debitis natus? Nihil reiciendis deserunt natus
        necessitatibus. Aliquam exercitationem adipisci veritatis ex voluptatem
        commodi, minus eaque quibusdam libero ea doloremque deleniti maiores.
        Suscipit inventore earum reiciendis ullam asperiores et, ipsum cumque
        nobis blanditiis error porro, fugiat cupiditate! Dolorum, beatae.
        Explicabo, ullam illum voluptas animi ipsa incidunt soluta repellendus
        minus! Laudantium, culpa! At ad laboriosam voluptates excepturi, nihil
        ducimus unde adipisci officiis neque aut dignissimos deleniti veniam
        debitis? Qui possimus laudantium fuga autem saepe nobis nesciunt
        repellendus temporibus porro libero nihil vitae perspiciatis veritatis
        architecto neque, quisquam esse distinctio molestias et tenetur?
        Corrupti et maiores necessitatibus ea optio! Quisquam, fuga accusamus.
        Nam quasi eligendi voluptas aperiam tempora tenetur pariatur adipisci,
        cumque aspernatur quis, dignissimos modi. Veritatis perferendis totam
        minus cum, quia voluptates eligendi. Eaque consequatur amet nam aperiam?
        Accusantium aperiam perferendis quisquam quasi minima dolores optio?
        Blanditiis quos assumenda cum vero dolorum illo, consequuntur architecto
        ad iste, incidunt sapiente tempora similique doloremque modi natus
        nobis. Ullam, exercitationem reiciendis. Consequuntur maiores nulla
        architecto at esse, cum nesciunt voluptatem culpa quidem nisi cupiditate
        nobis, iste neque commodi sint modi hic omnis sequi dignissimos labore
        adipisci. Ut doloremque odit ratione ad! Quo cum maiores quibusdam
        magnam quaerat? Dolorem doloremque architecto omnis minus quasi ad
        recusandae odit sunt mollitia iure? Debitis maiores velit unde, quam eum
        ipsa culpa dolores pariatur rem tenetur. Ullam quisquam sequi fugit
        deleniti autem ratione, reiciendis nesciunt accusamus possimus quam
        repudiandae laborum quidem mollitia harum? Nam aut molestias iusto,
        porro distinctio quidem neque provident, vero repellendus quia
        consequuntur. Eos vel rem quasi cumque molestias, nihil neque dolorem
        officia accusantium dolorum, quidem est tempore, libero doloribus
        repudiandae unde maxime culpa maiores illo tenetur. Quia enim
        perspiciatis suscipit non optio. Ratione alias quis id quos doloribus
        aliquam ducimus optio et, esse iste, quam impedit quas cumque? Voluptate
        voluptas magni velit amet praesentium adipisci eius eum, dolore, dolores
        esse molestiae iusto. Dolorum, animi odit? Eius iusto obcaecati
        blanditiis, error eligendi porro earum tempora qui saepe alias at minus
        natus, voluptatum exercitationem iure deserunt sequi dolorem enim ab
        nihil commodi. Perferendis, voluptatum. Hic, ipsum asperiores. Quos at
        voluptas totam perferendis nulla architecto ut illo hic nesciunt ex
        deserunt, esse quo possimus ipsum nemo. Asperiores odio laudantium
        reprehenderit sint eum excepturi repellendus maiores? Accusantium porro
        ea, deserunt veniam animi reiciendis, in molestiae ab fugit itaque
        voluptatem laboriosam modi repellendus corrupti quod accusamus obcaecati
        corporis amet, adipisci suscipit harum? Cum necessitatibus doloremque
        vitae eveniet. Possimus, iure repudiandae voluptatibus fugiat nisi
        officiis illum dolorem temporibus rem dolores unde non in reprehenderit
        sapiente dolorum tempora quos nemo quisquam fuga molestias sunt.
        Corrupti architecto mollitia laborum quod. Porro ducimus quas dolor
        aliquid ratione iure, laborum consequatur, ea blanditiis, nemo illum
        quae fugiat et quam quis. Accusantium vero quo est libero recusandae
        iure adipisci temporibus consectetur commodi eligendi. Necessitatibus
        ducimus explicabo ipsa vel autem officia laboriosam beatae obcaecati
        neque et optio, unde assumenda nihil accusamus dolorum dolorem quo
        dignissimos voluptas quidem odio, provident, vitae minus debitis.
        Quisquam, fugiat. Error possimus nulla architecto odio dolorem,
        veritatis temporibus, similique nobis, quod aspernatur culpa sunt! Cum
        ea possimus quaerat, id eius, iusto voluptatum consequuntur perferendis
        officia inventore incidunt mollitia nemo beatae! Dolorem perferendis
        necessitatibus, praesentium hic quaerat, atque eius cumque debitis nobis
        delectus velit sed quisquam a, commodi placeat consequuntur quis veniam
        consectetur mollitia saepe. Aspernatur dolores iure nostrum ipsum ullam?
        Facere a saepe corporis nesciunt quidem odit magnam aut et, blanditiis
        eum. Quo accusamus ea reiciendis soluta. Ad nisi, cupiditate eveniet
        beatae fugit adipisci, nesciunt blanditiis animi, tempore nostrum iste!
        Ratione at veritatis, voluptates itaque, dolorum possimus aliquid ipsum
        sed ipsam doloremque repudiandae natus perferendis molestiae aperiam quo
        quod dolore earum pariatur omnis. Culpa at rerum enim sapiente voluptate
        consequuntur? Corrupti necessitatibus voluptatibus a laborum totam
        corporis itaque repellat sapiente quisquam exercitationem rerum vel
        dignissimos dicta nobis quos, explicabo temporibus delectus deserunt
        officiis neque illo unde autem laboriosam ipsam? Debitis. Dignissimos
        ad, nesciunt nemo ipsa labore adipisci molestias atque autem! Atque
        libero similique commodi! Molestias veniam amet consequuntur nulla
        praesentium! Veniam debitis sapiente dignissimos error doloremque
        laborum, ex quam delectus. Accusantium iusto tempora itaque eveniet
        incidunt odio commodi dignissimos nobis amet sapiente fuga, animi sed
        nostrum quasi nesciunt voluptatibus corrupti et molestiae id cupiditate
        necessitatibus? Accusamus a debitis dicta repellat! Nostrum totam unde
        laborum excepturi ex reiciendis odit, aspernatur ipsam aperiam, vitae
        earum hic. Quaerat iste molestiae deleniti corporis et, architecto
        explicabo omnis amet accusantium minus, labore totam. Ullam, eum.
        Cupiditate est, a, ut adipisci, quaerat distinctio in repellendus
        quisquam debitis non illum sed laborum nobis! Ipsa sed ullam nam sequi a
        voluptates magni voluptatem culpa! Eligendi corrupti laborum commodi. A
        iusto nostrum hic velit tempora maxime cupiditate voluptatum rem sunt
        exercitationem recusandae id deserunt minima culpa, distinctio minus
        deleniti provident itaque nemo cum maiores! Cum architecto repellendus
        quas numquam! Molestiae numquam dolorum laborum dolor voluptatem alias,
        laboriosam, quod ipsum earum minima libero reprehenderit, optio itaque
        odit necessitatibus aspernatur. Amet, itaque nobis? Porro doloremque
        quod facere ab repudiandae, repellat dolore. In aliquid maxime id sequi
        quasi, sint omnis debitis voluptatibus esse rerum nulla dicta quas
        beatae eos delectus unde a dolor ullam, amet consequatur inventore
        assumenda totam ex. Numquam, repellendus. Error ex nisi soluta eius
        laudantium voluptas, saepe cupiditate vitae assumenda facere aut facilis
        blanditiis? Rerum laudantium, commodi repellendus ratione pariatur
        labore saepe accusamus a. Veritatis praesentium quis nobis ipsa? Amet
        omnis dignissimos eum reprehenderit distinctio, cupiditate assumenda
        modi commodi, voluptatum temporibus ipsum repellendus placeat officia
        ut. Eius quis ut fuga ab velit, reiciendis minus, consectetur laborum
        possimus repellendus architecto? Pariatur repellat exercitationem quia
        nesciunt! Deleniti unde vitae numquam, vero iusto sed? Non dolore in
        neque sit quisquam architecto, inventore perspiciatis ab facere
        molestias culpa velit, assumenda magnam voluptates voluptatem.
        Perspiciatis, error. Cum, cupiditate veritatis! A perferendis harum quia
        eos, rem asperiores cupiditate esse vitae fugit cum! Suscipit delectus
        eius quisquam, placeat iste minima aperiam sit! Facere quasi veritatis
        natus. Fugiat blanditiis assumenda expedita quos vero exercitationem
        amet a minima qui. Velit explicabo, aut eligendi atque animi quae
        quibusdam deleniti! Cum earum excepturi deserunt ipsum odio aut
        provident id ullam. Iure ipsam officia repellendus facere cupiditate
        dolore, aliquam optio deserunt animi atque eligendi architecto eos amet
        dicta quae consequatur recusandae odio, exercitationem corporis
        distinctio! Ducimus at perferendis amet recusandae tenetur.
        Exercitationem cum maiores tempore ut laudantium, odit possimus, odio
        enim quod eos sint, delectus ipsam quam quae. Fuga quas laboriosam
        consectetur, quod enim nostrum officia autem excepturi animi, beatae ad!
        Esse, modi, accusamus architecto distinctio cupiditate laborum aliquid
        consequuntur temporibus porro doloremque dolore soluta tempora incidunt.
        Iusto, quos? Doloremque reprehenderit nobis maxime eligendi aperiam nam
        dolor ab, sed a quod. Beatae sit, eligendi nisi nostrum quibusdam, earum
        autem atque tempore quas harum aperiam porro. Laborum nulla amet,
        corporis, est atque, illum voluptate blanditiis quae ipsum natus minus
        libero distinctio quas? Fugiat molestiae laborum porro! Fugit, officiis
        consequuntur. Temporibus sequi totam ipsa quisquam sed cumque
        repudiandae voluptate quam magni, voluptates illo delectus, perspiciatis
        dolore. Corporis consequatur molestiae maxime eos, porro nam! Recusandae
        neque ipsum quas dicta beatae cupiditate laborum autem deserunt porro
        consequuntur magnam, provident molestias quaerat reiciendis ipsa
        perferendis ad ipsam hic debitis tenetur. Neque consequuntur fugiat
        ipsam? Quae, vero. Similique, at illum. Aliquid veritatis ullam quo rem
        quasi quam alias similique ratione, debitis eos minus repellendus totam
        repellat. Aperiam adipisci optio amet omnis deleniti a unde minima
        accusantium dicta? Voluptatum unde corrupti ab nihil corporis magnam eos
        esse est soluta aperiam! Nisi ex itaque, nam minima, maxime ab culpa
        doloribus, libero accusamus atque veritatis! Iste corporis provident
        illo ullam? Voluptatum esse dolor ducimus quibusdam vel minima ipsam
        corrupti neque blanditiis quo, accusantium hic explicabo necessitatibus
        iusto voluptatem consectetur. Possimus repellendus neque obcaecati eius
        maiores omnis saepe nesciunt nulla reprehenderit? Eos ipsa veniam odit
        amet tenetur qui praesentium. Ducimus facere sunt officiis modi
        possimus, laudantium praesentium beatae perferendis eaque reiciendis
        animi quisquam pariatur delectus dicta est molestiae? Aspernatur,
        facilis molestias? Odio numquam dolores explicabo exercitationem minus
        quas quia quisquam eligendi doloribus. Illum, libero ad aut fuga
        obcaecati maxime temporibus quae inventore impedit a, sequi amet itaque
        aliquid doloremque veniam minima? Ea tempore odio hic molestiae quidem
        minima voluptas veritatis repudiandae nisi delectus dolores aspernatur
        illum modi, autem magnam cupiditate dolor maiores doloribus dolorem!
        Magni inventore reiciendis sunt placeat cupiditate accusantium! Minima
        ullam veniam eum atque rem, voluptas esse porro unde, nihil vel optio
        amet voluptatum excepturi quidem praesentium! Mollitia, perspiciatis
        dolore! Quas aperiam velit consequuntur soluta labore illum, voluptate
        sed? Nostrum magnam odio provident officia. Praesentium accusamus, quos
        cupiditate labore optio rem, quisquam ipsum quo excepturi rerum ducimus
        libero fuga facilis id non quaerat porro suscipit provident dolorum
        tempora nostrum! Aspernatur asperiores dolorem laudantium facilis sint,
        necessitatibus tempora optio atque quidem eius, in autem porro similique
        sapiente dolorum deleniti doloremque sunt quisquam aut! Veritatis nisi
        impedit eligendi reiciendis est fuga. Iure consequatur quae amet quod
        quibusdam illum quos repellat eum atque facere? Corporis, animi possimus
        esse quos explicabo officiis ea consequatur veritatis voluptate sint
        quae, pariatur itaque eligendi in error?
      </p>
    </div>
  );
}
export default ScrollIndicator;

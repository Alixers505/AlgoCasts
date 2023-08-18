// 13/14 passing

function compressedString(message) {
  let prevChar = '';
  let count = 1;
  let newArr = [];

  if (message === '') {
    return;
  }

  for (let char of message.toLowerCase().split('')) {
    if (char !== prevChar) {
      if (count > 1) {
        newArr.push(count);
        count = 1;
      }
      newArr.push(char);
      prevChar = char;
    } else {
      count++
    }
    if (count === message.length) {
      newArr.push(count);
    }
  }
  return newArr.join('').toString();
}

// function compressedString(message) {
//   let prevChar = '';
//   let count = 1;
//   let newStr = '';

//   if (message === '') {
//     return;
//   }

//   for (let char of message) {
//     if (char !== prevChar) {
//       if (count > 1) {
//         newStr += count;
//         count = 1;
//       }
//       newStr += char;
//       prevChar = char;
//     } else {
//       count++
//     }
//     if (count === message.length) {
//       newStr += count;
//     }
//   }
//   return newStr;
// }

function compressedString(message) {
  let count = 0;
  let newStr = '';

  if (message === '') {
    return;
  }

  for (let i = 0; i < message.length; i++) {
    count++;
    if (message[i] !== message[i + 1] && count > 1) {
      newStr += message[i] + count;
      count = 0;
    } else if (message[i] !== message[i + 1]) {
      newStr += message[i];
      count = 0;
    }
  }
  console.log(newStr);
  return newStr;
}
compressedString("bbbcdd");
// compressedString("wjgbrpazkqkqxpnuinytcgzwpoleqvrgplqpdjfnlbejisexuuhtednaggugzuvtnqylimftqsdiwyqznedllvvguvqpcltekidefwogeyhkxnokialtmyugxxijzxqicmrvqnccyhfrwwtthdcjwhutalirimlntgnfqamigidmaccgdcqhgyhhyxntwszodczsqnngeeajdjnjilbxgzvrwakqstlsowdzyiugkqgckxbepbouygaglwbzftvyqfvzvmcaxfthjlxbtysdccfwayvsgovrdqojqugasfddbzfnxfiqvbbuhfixktpasyisqjjhwekwlgfqlqcmahgogujmaupyylyjwiyboudheiahnnfxadqgudyupscuhxamyhunccjrdmhovvrngfltvblmyljkhqzualxnjunhjswzzrcenmghuoipnwaendapixtcejxscblyfsbsdrtnmxoitluknuuuxnuuwxddikpedehxzgdnvtmxdgfqexwjflsenhubcmhbmkhkpnbxuqrpuqdiqdividjvzynsomupnnswoyonujjekfpwuhfdkisxcopmrehaxvsxryeqoaxirywszndjurkcytzvcqwugyhlvnvgvenkzidtjrgzeuzjpcncpulznakcszpueyfjulchcypgoobjgqpzrqwxbttzruvhivhkigsovrsxbeokxfdsbixqhnhbsvyfnszpltbdjqkxuqqtmnzzkzwmbowkrybvqqwriocebyvckhyocaedenxkkhdbpgdfictgmaosdwbftcqkwivsntrwxtafopxdrxmzbpgxkozyrcnosvgsnrepmdhhewfpnbztiywgobmvmclrnbsweqmpfexvircuihbcpolxhpvoqrrorxhjbwhkucedcwepteyvdilxwprlhwoqnafbhizxvjungwambfmrsdknykjrdrfetqsrmyyiqrkcxazzqhtqgtbkrgfykebdpimzkentusgektgdjrpogpyvtzrfojtmcuvpqvgbcpinjzrsketbluscbqankbgyoxzincofhhihgabbapniwqnkhdhkaujjxghfnbsygzsmlrjikwlvlwhnjywtsdsamyuwidizlgnuiomtwqsfklzejoniigiyipyikocqayeafsvkmxccsichfhhwvtvivpqpigudhvmzzkzzwahkonrrpvmjlgrrshztkdcacaghybndqzfnnrslveugqebatlcfrudkamcaluqpobxsxufacliujvgdfksopivtdmnzvhqpybxjazgfoukxblsadttqxbkqsfupuolessrxghnfgmhjcrvsxutltyxnsjdjehfcylrovylcurlmeldvkwhxwmeotbdpxvununvoagygtaloxwhdkupmktrjlvrryghtoenkeriyymubtnqiwmupipfqhyyoilkldfynwbharyeswugekfmhonupsqctjnlwteepqeenbfxcasaivestogilbverpnlhlycbvppknoocftbjobvurgccpnvtshaceqqgxhydsplppskwlzjopjhwoyzzjhgxvntsybgqypvoskibklxfqitwojwctijexunlrwmunhmaeiwyyxszwyqbkxmxhcrfasaaxhqojjtewzzdzribbwycavljpytxljobrohvoxbgfpcmjzsevxwbslxaymquyxyvukchjqymzuwbbcbldyshuacotvigivrlzythurvpfixhkocwjlzzdkjpipisvfstmsgexcqxwpirrvlqvynilhkijzurhbvbmzzstweynkvypxskhknajnicvbmgfkpnumjirjkakechtmhryfdtpfzqpfhrbvvmoprgwnikkkvwsnntprlohxlukknvwkokpoccxxigmpqxxifworjysilpemvahhxcbpmykpbhqmfydypqthbsbhieifggbtpemovdlteaxskwpfzytinivlnjklloivefoubpgsvycqfdvrhusnnxjvnlqmmgttvzvohtfdbizbqjbjwgdxobqgpplijyzulmkdocgjprfufqhcsfmebilzsxxjmasjfiyiddtxezjnxglyocyevxdfnewqyczlqjjckedwyozubqyndrzifhpdvjjqnvlofolrwcmvhsequhxaugltwvdfwdkkivjzicajtzjfdhajalfzyzmxjphouiojvpkvlvoidsjvpzmxfznkgntoazyguxczfdtjnyldoqbkhhxmelopwciudbmzlrnrlqpsbdgluwuqwpvsrwpqgoijpdmwvkblhmfpagvqrqadcxezffclwlrvpvxxgykwwvgqnvwzxwurhaakhtaqmmfvxljlxcykdgfxfsjwylauejpjvdfjaphyzkfvwgefbmhnhikffvolxhnxpzsgzzplhozaeclluxrajslwvqatfznfyauyluceqzrmepbvsukrxsetpelzwqqpprrpkyyyjakrfyhntbuwwnpnfjjhaeeevyefgribnlluqmmgzmgclwhjqwxmxcggvpyuuariovuslkkrltpmkffwhjfljmhzgsvottpmnwcvgiawvxckjrzvhkpkbimyvzdshyczvvpqipqoxdtimzibbosvlusokrdrtetdbzuwuqmuslfkkbtgsdcaledprmmbrpncrutbezrbwwhvaikwaojizuqimqyzchnnpfpnjjtbqgvtumjhwacrmctmjwvawjariixvjetytdqjxfxdnwzwfwnklbdmysprjcbkmixdxfskfyekjaedsthrhbznpjkqdtxdyxpwmkqhnopaqrreurigwufgypqylyelqmbqdymobkqirsmeosxfugwhfhinzfkhfeplpnrsgkrugbzfwxjougztvdahmesmmmubgxsyfvpngcmmizsgonysoecwfubojholzhnhbyutmfvxgofdcwlkvfnqthkmkpxjtx");
// $(document).ready(function(){
//     $(".Content-bai3-c1").click(function( event){
//         $(".ND").toggleClass("ND-b3-c1")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b3-c1")
//         $(".KTLQ").empty();
//         $('.ND-b3-c1').append(`

//             <ul>
//                 <li>
//                     Nhắc lại. Tập hợp là một khái niệm cơ bản của Toán học, dùng để chỉ một nhóm các đối tượng nào đó.
//                 </li>
//             </ul>
//             Ký hiệu. A, B, X, . . . <br>
//             Nếu x là phần tử của tập hợp A, ta kí hiệu x ∈ A, ngược lại ta ký hiệu x /∈ A.<br>

//             Ví dụ:<br>
//             N = {0, 1, 2, . . .} là tập hợp các số tự nhiên.<br>
//             Z = {0, 1, −1, 2, −2, . . .} tập hợp các số nguyên.<br> 
//             Q = m n | m, n ∈ Z, n 6= 0 tập hợp các số hữu tỉ.<br>
//             R: Tập hợp các số thực.<br> 
//             C: Tập hợp các số phức.<br>
//             <ul>
//                 <li>Vị Từ</li>
//             </ul>
//             Định nghĩa:  Vị từ là một phát biểu p(x, y, ..), trong đó x, y, . . . là các biến thuộc tập hợp A, B, . . . cho trước sao cho: - Bản thân p(x, y, . . .) không phải là mệnh đề. - Nếu thay x, y, . . . thành giá trị cụ thể thì p(x, y, . . .) là mệnh đề.<br>
//             Ví dụ. <br>
//             r(x, y, z) = “x 2 + y 2 > z”. <br>
//             q(x, y) = “x 2 + y = 1”. <br>
//             p(n) = “n + 1 là số nguyên tố”.<br>
//             <ul>
//                 <li>Các Phép Toán trên vị từ</li>
//             </ul>
//             Cho trước các vị từ p(x), q(x) theo một biến x ∈ A. Khi ấy, ta cũng có các phép toán tương ứng như trên mệnh đề:<br>
//             - Phủ định					 ¬p(x)<br>
//             - Phép nối liền 				p(x) ∧ q(x)<br>
//             - Phép nối rời 				p(x) ∨ q(x)<br>
//             - Phép kéo theo 				p(x) → q(x)<br>
//             - Phép kéo theo hai chiều 		p(x) ↔ q(x)<br>
//             <ul>
//                 <li>Các trường hợp vị từ</li>
//             </ul>
//         <p>
//             TH 1. Khi thay x bởi một phần tử a tùy ý thuộc A, ta có p(a) đúng.<br>
//             TH 2. Với một số giá trị a thuộc A, ta có p(a) đúng. <br>
//             TH 3. Khi thay x bởi một phần tử a tùy ý thuộc A, ta có p(a) sai<br>
//         </p>
//         `);
//         $('.KTLQ-b3-c1').append(`
//             <ul>
//                 <li>Các quy tắc phổ dụng:
//                     <p>Đặc biệt hóa phổ dụng</p>
//                 </li>
//                 <li>Tổng quát hóa phổ dụng
//                     <p>
//                         Nếu với mỗi a ∈ X ta có p(a) là mệnh đề đúng thì khẳng định “∀x ∈ X, p(x)” là mệnh đề đúng.<br>
//                         Nếu với mỗi a ∈ X ta có p(a) là mệnh đề đúng thì khẳng định “∀x ∈ X, p(x)” là mệnh đề đúng.<br>
//                     </p>

//                 </li>

//             </ul>
//         `)

//     event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai4-c1").click(function(event){
//         $(".ND").toggleClass("ND-b4-c1")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b4-c1")
//         $(".KTLQ").empty();
//         $('.ND-b4-c1').append(`
//         <p>
//         Mệnh đề: là một khẳng định có giá trị chân lý xác định, đúng hoặc sai. <br>
//         Câu hỏi, câu cảm thán, mệnh lệnh... không là mệnh đề.<br>
//         +  ví dụ:<br>
//     </p>
//     <ul>
//         <li>mặt trời quay quanh trái đất</li>
//         <li>1+1 =2</li>
//         <li>Hôm nay trời đẹp quá !  (ko là mệnh đề)</li>
//         <li>Học bài đi ! (ko là mệnh đề)</li>
//         <li>3 là số chẵn phải không? (ko là mệnh đề)</li>
//     </ul>
//     <p>
//         + kí hiệu: người ta dùng các ký hiệu P, Q, R... để chỉ mệnh đề.
//         Chân trị của mệnh đề:<br>
//             +  một mệnh đề chỉ có thể đúng hoặc sai, không thể đồng thời  vừa đúng hoặc vừa sai. khi mệnh đề P đúng ta nói P có chân trị đúng , ngược lại ta nói P có chân trị sai.<br>
//             + chân trị đúng và chân trị sai sẽ được ký hiệu lần lượt là là 1(hay Đ,T) và 0( S,F).
//         + Phân Loại:<br>
//         mệnh đề phức hợp : là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ ( và, hay , khi  và chỉ khi) hoặc trạng từ “không”<br>
//         mệnh đề sơ cấp: ( nguyên thủy) : Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “ không”.
//     </p> 
//         `);
//         $('.KTLQ-b4-c1').append(`
//         <ul>
//             <li>Quy nạp Phân Rã</li>
//             <li>Quy Nạp Lùi</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })

// })
// $(document).ready(function(){
//     $(".Content-bai1-c2").click(function(event){
//         $(".ND").toggleClass("ND-b1-c2")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b1-c2")
//         $(".KTLQ").empty();
//         $('.ND-b1-c2').append(`

//         <ul>
//             <li>Định Nghĩa</li>
//         </ul>
//         Định nghĩa 1: Một quan hệ hai ngôi từ tập A đến tập B là tập con R của tích Descartes A × B.<br>
//         Ví dụ. Cho A = {0, 1, 2} và B = {a, b}. Khi đó <br>
//         R = {(0, a), (0, b), (1, a), (2, b)}<br>
//         là một quan hệ từ A vào B. Quan hệ này được mô tả bằng<br>

//         Định nghĩa 2: Một quan hệ trên tập hợp A là một quan hệ hai ngôi từ A đến chính nó.<br>
//         Ví dụ 1. Cho A = {1, 2, 3, 4}, và R = {(a, b)| a là ước của b}. Khi đó R là một quan hệ trên A. Hãy tìm R?<br>
//         Giải. R = {(1, 1),(1, 2),(1, 3),(1, 4),(2, 2),(2, 4),(3, 3),(4, 4)}.<br>

//         Ví dụ 2. Cho A = {1, 2, 3, 4}. Hỏi ta có thể xây dựng được bao nhiêu quan hệ trên A? Mở rộng kết quả cho trường hợp A có n phần tử.<br>
//         Giải. Vì |A| = 4 nên |A × A| = 16. Do mỗi quan hệ trên A là một tập con của A × A nên số quan hệ trên A là 2 16 .<br>
//         Trong trường hợp |A| = n, số quan hệ trên A là 2n2.<br>
//         <ul>
//             <li>Các tính chất của Quan hệ</li>
//         </ul>
//         Định nghĩa: Cho R là quan hệ trên A. Ta nói<br>
//         R phản xạ ⇔ ∀x ∈ A, xRx.<br>
//         R đối xứng ⇔ ∀x, y ∈ A, xRy → yRx.<br>
//         R phản xứng ⇔ ∀x, y ∈ A, xRy ∧ yRx → x = y.<br>
//         R bắc cầu (hay còn gọi là truyền) ⇔<br>
//         ∀x, y, z ∈ A, xRy ∧ yRz → xRz.<br>
//         Nhận xét: Cho R là quan hệ trên A. Khi đó:<br>
//         R không phản xạ ⇔ ∃x ∈ A, xRx.<br>
//         R không đối xứng ⇔ ∃x, y ∈ A, xRy ∧ yRx.<br>
//         R không phản xứng ⇔ ∃x, y ∈ A, xRy ∧ yRx ∧ x # y.<br>
//         R không bắc cầu ⇔ ∃x, y, z ∈ A, xRy ∧ yRz ∧ xRz.<br>


//         `);
//         $('.KTLQ-b1-c2').append(`
//         <ul>
//             <li>Biểu diễn quan hệ</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai2-c2").click(function(event){
//         $(".ND").toggleClass("ND-b2-c2")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b2-c2")
//         $(".KTLQ").empty();
//         $('.ND-b2-c2').append(`

//         <ul>
//             <li>Định Nghĩa</li>
//         </ul>
//         Ví dụ. Cho Ω = tập hợp sinh viên của lớp này, gọi <br>
//         R = {(a, b)| a cùng họ với b}. <br>
//         Hỏi R có những tính chất nào? <br>
//         Giải. Phản xạ, đối xứng và bắc cầu <br>
//         Định nghĩa: Cho R là quan hệ trên tập hợp A. Ta nói R là quan hệ tương đương trên A nếu R thỏa mãn các tính chất phản xạ, đối xứng và bắc cầu.<br>
//         Ví dụ. Cho R là quan hệ trên Z, được xác định bởi <br>
//         ∀x, y ∈ Z, xRy ⇔ x + y chẵn.<br>
//         Khi đó R là quan hệ tương đương.<br>
//         Ví dụ. Quan hệ R trên các chuỗi ký tự xác định bởi <br>
//         aRb ⇔ a và b có cùng độ dài. <br>
//         Khi đó R là quan hệ tương đương<br>
//         <ul>
//             <li>Lớp Tương đương</li>
//         </ul>
//         Định nghĩa. Cho R là quan hệ tương đương trên A và x thuộc A. Khi đó, tập hợp tất cả các phần tử trong A có quan hệ với x được gọi là lớp tương đương của x, ký hiệu bởi x hoặc [x]. Vậy<br>
//         x = {a ∈ A | aRx}.<br>
//         Ví dụ.(tự làm) Trên tập hợp A = {−2, −1, 1, 2, 3, 4, 5}. Ta xét quan hệ hai ngôi R như sau:<br>
//         x R y ⇔ x + 3y chẵn. <br>
//         a) Chứng minh R là quan hệ tương đương.<br> 
//         b) Tìm các lớp tương đương [1], [2] và [4].<br>

//         Đáp án. b) 	[1] = {−1, 1, 3, 5}; <br>
//         [2] = {−2, 2, 4}; <br>
//         [4] = {−2, 2, 4}.<br>
//         <ul>
//             <li>Nhận Xét</li>
//         </ul>
//         Dựa vào Mệnh đề trên ta có nếu R là một quan hệ tương đương trên tập hợp A thì ta có thể phân tích A thành hợp của các lớp tương đương rời nhau.<br>
//         Sự phân tích đó được gọi là sự phân hoạch tập hợp A thành các lớp tương đương.<br>
//         <img src="src/img/Capture.PNG" alt="">

//         `);
//         $('.KTLQ-b2-c2').append(`
//         <ul>
//             <li>Quan hệ đồng dư trên Z</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai3-c2").click(function(event){
//         $(".ND").toggleClass("ND-b3-c2")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b3-c2")
//         $(".KTLQ").empty();
//         $('.ND-b3-c2').append(`

//         <ul>
//             <li>Định Nghĩa:</li>
//         </ul>
//         Định nghĩa. Quan hệ R trên tập hợp A được gọi là quan hệ thứ tự nếu nó thỏa mãn các tính chất phản xạ, phản xứng và bắc cầu. Khi đó (A, R) được gọi là một tập thứ tự.<br> 
//         Nếu R là một thứ tự trên tập hợp A thì ta ký hiệu a  b thay cho aRb, và ký hiệu a ≺ b thay cho a  b nhưng a 6= b.<br>
//         <ul>
//             <li>Phần tử Trội</li>
//         </ul>
//         Định nghĩa: Cho (A, ) là một tập thứ tự và x, y ∈ A. Khi đó: <br>
//         1 Nếu x  y thì ta nói y là trội của x hoặc x được trội bởi y. <br>
//         2 Nếu x ≺ y thì ta nói y là trội thật sự của x. <br>
//         3 Nếu x ≺ y và không tồn tại z ∈ A sao cho x ≺ z ≺ y thì ta nói y là trội trực tiếp của x <br>
//         Ví dụ. Cho A = {1, 2, 3, 4, 5, 6}. Khi đó: <br>
//         a) Với (A, ≤), ta có các trội của 2 là 2, 3, 4, 5, 6; trội trực tiếp của 2 là 3. <br>
//         b) Với (A, |), ta có các trội của 2 là 2, 4, 6; trội trực tiếp của 2 là 4 và 6.<br>
//         <ul>
//             <li>Biểu đồ Hasse</li>
//         </ul>
//         Định nghĩa: Biểu đồ Hasse của tập thứ tự (A, ) là một đồ thị có hướng <br>
//         Các đỉnh tương ứng với các phần tử của A.<br> 
//         Các cung có hướng nối từ x đến y nếu y là trội trực tiếp của x.<br>
//         Ví dụ. Ta có biểu đồ Hasse cho tập thứ tự ({1, 2, 3, 4, 6}, | ) là<br>

//         <ul>
//             <li>Phần tử Cực trị</li>
//         </ul>
//         Định nghĩa. Cho (A, ) là một tập thứ tự và m ∈ A. Ta nói<br>
//         m là phần tử tối đại của A nếu ∀x ∈ A, m  x → m = x.<br>
//         m là phần tử tối tiểu của A nếu ∀x ∈ A, x  m → x = m.<br>
//         m là phần tử lớn nhất của A nếu ∀x ∈ A, x  m.<br>
//         m là phần tử nhỏ nhất của A nếu ∀x ∈ A, m  x.<br>
//         Ví dụ. Từ biểu đồ Hasse của tập thứ tự ({1, 2, 3, 4, 6}, | )<br>
//         Ta có:<br>
//         4 và 6 là các phần tử tối đại <br>
//         1 là phần tử tối tiểu và cũng là phần tử nhỏ nhất <br>
//         không tồn tại phần tử lớn nhất.<br>


//         `);
//         $('.KTLQ-b3-c2').append(`
//         <ul>
//             <li>Thứ tự toàn phần</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai1-c3").click(function(event){
//         $(".ND").toggleClass("ND-b1-c3")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b1-c3")
//         $(".KTLQ").empty();
//         $('.ND-b1-c3').append(`
//         <ul>
//             <li>Hàm Boole</li>
//         </ul>
//         Định nghĩa: Một hàm Boole n biến là ánh xạ <br>
//         f : B n → B, <br>
//         trong đó B = {0, 1}.<br>
//         Như vậy hàm Boole n biến là một hàm số có dạng : 
//         f = f(x1, x2, . . . , xn), <br>
//         trong đó mỗi biến trong x1, x2, . . . , xn chỉ nhận hai giá trị 0, 1 và f nhận giá trị trong B = {0, 1} và B n = {(x1, x2, . . . , xn)| xi ∈ B}.<br>
//         Ký hiệu Fn để chỉ tập các hàm Boole n biến.<br>

//         Ví dụ. <br>
//         f(x, y, z, t) = (x ∨ z)t ∨ (x y ∨ y t)z ∨ (y z ∨ x y z)t là hàm Boole 4 biến.<br>
//         <ul>
//             <li>Bảng Chân Trị:</li>
//         </ul>
//         Định nghĩa. Xét hàm Boole n biến f = f(x1, x2, . . . , xn). Vì mỗi biến xi chỉ nhận một trong hai giá trị 0, 1 nên chỉ có 2 n trường hợp của bộ biến (x1, x2, . . . , xn).<br>
//         Do đó, để mô tả f, ta có thể lập bảng gồm 2 n hàng ghi tất cả các giá trị của f tùy theo 2 n trường hợp của biến. Ta gọi đây là bảng chân trị của f.<br>
//         Ví dụ. Xét kết quả f trong việc thông qua một quyết định dựa vào 3 phiếu bầu x, y, z. Mỗi phiếu chỉ lấy một trong hai giá trị: 1 (tán thành) hoặc 0 (bác bỏ). <br>

//         Kết qủa f là 1 (thông qua quyết định) nếu được đa số phiếu tán thành, là 0 (không thông qua quyết định) nếu đa số phiếu bác bỏ.<br> 
//         Hãy lập bảng chân trị của f.<br>

//         Giải. Bảng chân trị của hàm Boole f là:<br>
//         <img src="src/img/bangchantri.PNG" alt="" style="display: block; margin-left: auto; margin-right: auto;">        
//         <ul>
//             <li>Dạng Nối rời chính tắc</li>
//         </ul>
//         Định nghĩa. Xét tập hợp các hàm Boole Fn theo n biến x1, x2, . . . , xn. Khi đó:<br>
//         Mỗi hàm Boole xi hay xi được gọi là từ đơn. <br>
//         Từ tối tiểu là tích khác không của đúng n từ đơn.<br>


//         Ví dụ. Xét tập hợp các hàm Boole theo 3 biến x, y, z. Ta có <br>
//         Các từ đơn là x, y, z, x, y, z. <br>
//         Các từ tối tiểu là x y z, x y z, x y z, x y z, x y z, x y z, x y z, x y z<br>
//         Nhận xét. Tập hợp các hàm Boole n biến chứa đúng 2n từ đơn và 2 n từ tối tiểu.<br>
//         Định lý: Cho f là hàm Boole n biến x1, x2, . . . xn. Khi đó: <br>
//         Nếu f là từ tối tiểu thì bảng chân trị của f có đúng một vị trí bằng 1.<br>
//         Ngược lại, nếu f chỉ nhận giá trị 1 tại vị trí u = (a1, a2, . . . , an) thì f là từ tối tiểu có dạng f = b1 b2 . . . bn, trong đó <br>
//         bi =  xi nếu ai = 1; xi nếu ai = 0.<br>


//         `);
//         $('.KTLQ-b1-c3').append(`
//         <ul>
//             <li>Ánh Xạ</li>
//             <li>Tích Ánh Xạ:</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai2-c3").click(function(event){
//         $(".ND").toggleClass("ND-b2-c3")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b2-c3")
//         $(".KTLQ").empty();
//         $('.ND-b2-c3').append(`
//         <ul>
//         <li>Mạng Logic </li>
//     </ul>
//     <p> Định nghĩa:  Một mạng logic (hay mạng các cổng) biểu diễn một hàm boole f là một hệ thống có dạng </p>
//     <img src="src/img/manglogic.PNG" alt=""style="display: block; margin-left: auto; margin-right: auto;" ><br>
//     <p>trong đó: <br>   
//     1 Input: x1, x2, . . . , xn là các biến boole<br>
//     2 Output: f(x1, x2, . . . , xn) là hàm boole.<br>
//     Một mạng các cổng luôn được cấu tạo từ một số mạng sơ cấp mà ta gọi là các cổng. Ta có các cổng cơ bản sau:<br>
//     </p>
//     <img src="src/img/or.PNG" alt=""style="display: block; margin-left: auto; margin-right: auto;" ><br>
//     Ta có sự mở rộng cổng AND và OR cho nhiều đầu vào
//     <img src="src/img/manglogic4.PNG" alt=""style="display: block; margin-left: auto; margin-right: auto;" ><br>
//     Ví dụ. Cho hàm boole<br>
//     f = xy ∨ y(x ∨ z). <br>
//     Vẽ sơ đồ mạng logic của f<br>
//     GIẢI:
//     <img src="src/img/manglogic2.PNG" alt=""style="display: block; margin-left: auto; margin-right: auto;" ><br>	
//     Cổng NAND và cổng NOR<br>
//     Định nghĩa. Ta ký hiệu cổng NAND là NOT của AND và cổng NOR là NOT của OR.<br>
//     <img src="src/img/manglogic3.PNG" alt=""style="display: block; margin-left: auto; margin-right: auto;" ><br>
//     Định lý. Chỉ cần sử dụng một loại cổng NAND hoặc NOR là đủ để tổng hợp một hàm boole


//         `);
//         $('.KTLQ-b2-c3').append(`
//         <ul>

//             <li>Cổng AND, OR và CỔNG NOT</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $(".Content-bai3-c3").click(function(event){
//         $(".ND").toggleClass("ND-b3-c3")
//         $(".ND").empty();
//         $(".KTLQ").toggleClass("KTLQ-b3-c3")
//         $(".KTLQ").empty();
//         $('.ND-b3-c3').append(`
//     <ul>
//         <li>Bước 1. Vẽ biều đồ kar(f)</li>
//         <li>Bước 2 Xác định tất cả các tế bào lớn của kar(f) và các công thức đơn thức tương ứng với từng tế bào lớn.</li>
//         <li>Bước 3. Tìm trong kar(f) những ô chỉ nằm trong duy nhất một tế bào lớn và chọn tế bào này để phủ kar(f).</li>
//         <li>Bước 4. Xác định các phủ tối tiểu gồm các tế bào lớn</li>
//     </ul>
//     <p>
//         Nếu các tế bào lớn chọn được ở Bước 3 đã phủ được kar(f) thì kar(f) chỉ có duy nhất một phủ tối tiểu gồm các tế bào lớn của kar(f).<br>
//         Ngược lại, ta xét một ô bất kỳ chưa bị phủ. Sẽ có ít nhất hai tế bào lớn chứa ô này. Ta chọn một trong các tế bào lớn đó để phủ. Cứ tiếp tục quá trình trên đến khi nào kar(f) được phủ kín. Khi đó, ứng với mỗi phép phủ ta có một công thức đa thức. Công thức đơn giản nhất trong các công thức trên chính là công thức đa thức tối tiểu của f.<br>

//         Ví dụ. Tìm đa thức tối tiểu của hàm boole sau:<br>
//          f(x, y, z, t) = xyzt ∨ x(¯y ∨ z¯) ∨ yz ∨ xy(¯z ∨ t¯)<br>
//         </p>
//         `);
//         $('.KTLQ-b3-c3').append(`
//         <ul>

//             <li>K-Maps</li>
//         </ul>

//         `)
//         event.preventDefault()
//     })
// })

$.get("http://localhost:3000/posts",
    (data) => {
        renderSideBar(data);
    }
);

function renderSideBar(list) {
    $(".contents").empty();
    list.map(val => {
        $(".contents").append(`
        <li  >
        <a href="#"class="btn-${val.category}">${val.content}
            <span class="fas fa-caret-down first-${val.category}"></span>
        </a>
        <ul class="content-${val.category}">
            <li><a href="#"class="${val.category}-b1">${val.data[0].content1}</a></li>
            <li><a href="#"class="${val.category}-b2">${val.data[0].content2}</a></li>
            <li><a href="#"class="${val.category}-b3">${val.data[0].content3}</a></li>
        </ul>
    </li>
    `);
        $(`.btn-${val.category}`).click(function(e) {

            $(`.content-${val.category}`).toggleClass("show");
            $(`.first-${val.category}`).toggleClass("rotate");
            e.preventDefault();
        });
        renderContentfirst(val.category);
    })

}
const renderContentfirst = (id) => {
    if (id == "Logic") {
        $(`.${id}-b1`).click(function(e) {
            $(".ND").toggleClass("ND-b1-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c1")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 1) {
                            $('.ND-b1-c1').append(`
                            <p>${val.data[0].bai1[0].title}</p>
                            <p>${val.data[0].bai1[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai1[0].noidung[0].muc1}</p>
                            `);
                            $('.KTLQ-b1-c1').append(`
                             <p>${val.data[0].bai1[0].KTLQ[0].text1}</p>
                             <p>${val.data[0].bai1[0].KTLQ[0].text2}</p>
                             <p>${val.data[0].bai1[0].KTLQ[0].ex}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b2`).click(function(e) {
            $(".ND").toggleClass("ND-b2-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c1")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 1) {
                            $('.ND-b2-c1').append(`
                            <p>${val.data[0].bai2[0].title}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai2[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex1}</p>
                            <p>${val.data[0].bai2[0].noidung[0].DN1}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex2}</p>
                            <p>${val.data[0].bai2[0].noidung[0].DN2}</p>
                            <p>${val.data[0].bai2[0].noidung[0].DN3}</p>
                            `);
                            $('.KTLQ-b2-c1').append(`
                             <p>${val.data[0].bai2[0].KTLQ[0].text1}</p>
                             <p>${val.data[0].bai2[0].KTLQ[0].text2}</p>
                             <p>${val.data[0].bai2[0].KTLQ[0].text3}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b3`).click(function(e) {
            $(".ND").toggleClass("ND-b3-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c1")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 1) {
                            $('.ND-b3-c1').append(`
                            <p>${val.data[0].bai3[0].title}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH}</p>
                            <p>${val.data[0].bai3[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai3[0].noidung[0].muc1}</p>
                            <p>${val.data[0].bai3[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai3[0].noidung[0].ex1}</p>
                            <p>${val.data[0].bai3[0].noidung[0].DN1}</p>
                            <p>${val.data[0].bai3[0].noidung[0].ex2}</p>
                            <p>${val.data[0].bai3[0].noidung[0].DN2}</p>
                            `);
                            $('.KTLQ-b3-c1').append(`
                             <p>${val.data[0].bai3[0].KTLQ[0].text1}</p>
                             <img src="${val.data[0].bai3[0].KTLQ[0].img}" alt="">
                             <p>${val.data[0].bai3[0].KTLQ[0].text2}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
    } else if (id == "QH") {
        $(`.${id}-b1`).click(function(e) {
            $(".ND").toggleClass("ND-b1-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c2")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 2) {
                            $('.ND-b1-c2').append(`
                            <p>${val.data[0].bai1[0].title}</p>
                            <p>${val.data[0].bai1[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai1[0].noidung[0].KH}</p>
                            <img src="${val.data[0].bai1[0].noidung[0].img}" alt="">
                            <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                            <p>${val.data[0].bai1[0].noidung[0].ex1}</p>
                            `);
                            $('.KTLQ-b1-c2').append(`
                             <p>${val.data[0].bai1[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b2`).click(function(e) {
            $(".ND").toggleClass("ND-b2-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c2")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 2) {
                            $('.ND-b2-c2').append(`
                            <p>${val.data[0].bai2[0].title}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex1}</p>
                            <p>${val.data[0].bai2[0].noidung[0].KH}</p>
                            `);
                            $('.KTLQ-b2-c2').append(`
                             <p>${val.data[0].bai2[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b3`).click(function(e) {
            $(".ND").toggleClass("ND-b3-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c2")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 2) {
                            $('.ND-b3-c2').append(`
                            <p>${val.data[0].bai3[0].title}</p>
                            <p>${val.data[0].bai3[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH1}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH2}</p>
                            `);
                            $('.KTLQ-b3-c2').append(`
                             <p>${val.data[0].bai3[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
    } else {
        $(`.${id}-b1`).click(function(e) {
            $(".ND").toggleClass("ND-b1-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c3")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 3) {
                            $('.ND-b1-c3').append(`
                            <p>${val.data[0].bai1[0].title}</p>
                            <p>${val.data[0].bai1[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai1[0].noidung[0].KH}</p>
                            <img src="${val.data[0].bai1[0].noidung[0].img}" alt="">
                            <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                            <p>${val.data[0].bai1[0].noidung[0].ex1}</p>
                            `);
                            $('.KTLQ-b1-c3').append(`
                             <p>${val.data[0].bai1[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b2`).click(function(e) {
            $(".ND").toggleClass("ND-b2-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c3")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 3) {
                            $('.ND-b2-c3').append(`
                            <p>${val.data[0].bai2[0].title}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex}</p>
                            <p>${val.data[0].bai2[0].noidung[0].ex1}</p>
                            <p>${val.data[0].bai2[0].noidung[0].KH}</p>
                            `);
                            $('.KTLQ-b2-c3').append(`
                             <p>${val.data[0].bai2[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
        $(`.${id}-b3`).click(function(e) {
            $(".ND").toggleClass("ND-b3-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c3")
            $(".KTLQ").empty();
            $.get("http://localhost:3000/posts",
                (data) => {
                    data.map(val => {
                        if (val.id == 3) {
                            $('.ND-b3-c3').append(`
                            <p>${val.data[0].bai3[0].title}</p>
                            <p>${val.data[0].bai3[0].noidung[0].DN}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH1}</p>
                            <p>${val.data[0].bai3[0].noidung[0].KH2}</p>
                            `);
                            $('.KTLQ-b3-c3').append(`
                             <p>${val.data[0].bai3[0].KTLQ[0].text1}</p>
                            `);
                        }
                    })
                }
            );

            e.preventDefault()
        })
    }




}
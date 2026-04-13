export const CKEditorParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.";

export const JavascriptData = `
                      /* Sample JavaScript edit source */
                      // Define a module
                      var app = angular.module('app', ['ui.bootstrap']);
                      // Define a conroller.
                      app.controller('GrokController', ['$scope', '$filter',
                      function($scope, $filter) {
                      $scope.today = function() {
                      $scope.dt = new Date();
                      };
                      $scope.today();
                      $scope.isOpened = false;
                      $scope.open = function($event) {
                      $event.preventDefault();
                      $event.stopPropagation();
                      $scope.isOpened = true;
                      };
                      }]);
                      /* End of sample edit source */
                    `;

export const HtmlData = ` <!--Page header start-->
<div class="page-header">
    <Row>
        <Col xl="6">
            <H3>Ace Text editor</H3>
            <small>Zeta Admin panel</small>
        </Col>
        <Col xl="6">
            <OL class="breadcrumb pull-right">
                <LI class="breadcrumb-item"></LI>
                <LI class="breadcrumb-item">Editor </LI>
                <LI class="breadcrumb-item active">Ace Text editor</LI>
            </OL>
        </Col>
    <Row>
</div>
<!--Page header end-->`;

export const CssData = `.text-layer
                      {
                      font: 12px Monaco, "Courier New", monospace;
                      font-size: 3vmin;
                      cursor: text;
                      }
                      .blinker {
                      animation: blink 1s linear infinite alternate;
                      }
                      @keyframes blink {
                      0%, 40% {
                      opacity: 1
                      }
                      40.5%, 100% {
                      opacity: 1
                      }
                      }
                      @document url(http://c9.io/), url-prefix(http://ace.c9.io/build/),
                      domain(c9.io), regexp("https:.*") /**/
                      {
                      /**/
                      img[title]:before
                      {
                      content: attr(title) "A Image retrieved from" attr(src); /**/
                      white-space: pre;
                      display: block;
                      background: url(asdasd); "err
                      }
                      }
                      @viewport {
                      min-zoom: 1;
                      max-zoom: 200%;
                      user-zoom: fixed;
                      }`;

export const Typescript = `class Animal{  
        String color="white";  
        }  
        class Dog extends Animal{  
        String color="black";  
        void printColor(){  
        System.out.println(color);//prints color of Dog class  
        System.out.println(super.color);//prints color of Animal class  
        }  
        }  
        class TestSuper1{  
        public static void main(String args[]){  
        Dog d=new Dog();  
        d.printColor();  
        }}  `;

export const MDEExampleParagraph = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga hic error atque blanditiis fugiat, magni itaque? Deserunt magni facilis dicta. Sapiente praesentium qui perferendis dolore dignissimos explicabo possimus maxime nulla.Vitae ipsam deserunt molestias quas ipsum praesentium tempore, perferendis tempora adipisci nemo voluptatibus expedita qui, quis magnam cum sunt in neque magni hic maiores quaerat! Laudantium itaque error quidem officia.Ex, officia minima ipsa ad doloribus dolorem vero placeat assumenda aut accusamus iste maxime quam inventore modi sunt aliquid corrupti quasi, ipsam distinctio harum? Ex iusto modi officia numquam recusandae?Esse ad quo illum qui veniam laudantium. Officia illum quis maiores in exercitationem nihil quibusdam laborum at ullam error nostrum obcaecati dolorem magnam id nulla, culpa mollitia voluptatibus ratione pariatur.Harum explicabo, deserunt aspernatur consectetur fugiat illo iure dolore blanditiis? Mollitia omnis accusamus nesciunt quaerat, sint optio tempora excepturi alias suscipit maiores, quidem laborum debitis consequatur voluptas laboriosam esse dolor.Corrupti accusamus laboriosam iusto sit, eligendi aliquam, delectus dolor minus blanditiis ipsam, dolore nam exercitationem itaque a pariatur vel minima. Sapiente autem praesentium, provident dolorem iure commodi doloremque quaerat temporibus!Cumque quod a error laborum quidem perspiciatis beatae libero aperiam culpa recusandae numquam expedita debitis ex, similique ad, illo ipsum molestias officiis. Necessitatibus quos nostrum cum saepe eius quis laudantium?Est, quas voluptatum vel animi veritatis laborum, libero facere quo magni cupiditate corrupti obcaecati quia perferendis illum fugit omnis neque perspiciatis eum sunt exercitationem? Soluta ipsum porro voluptates quibusdam exercitationem.Cupiditate, minima sequi ea reiciendis sunt pariatur debitis explicabo quae qui corporis asperiores voluptatum repudiandae! Itaque, quibusdam totam libero, nostrum maiores architecto, modi nesciunt facilis inventore pariatur obcaecati eligendi accusantium.Dolorum fuga omnis quae!"
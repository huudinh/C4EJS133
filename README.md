"# C4EJS133" 

# Session 1 HTML #

1. HTML là gì?
2. Cấu trúc cơ bản HTML
3. HTML Elements
    - Attribute (key:value)
    - Self-closing tag
4. HTML phổ biến
    - HTML Heading
    - Paragrap
    - Link
    - Image
    - Table
    - List
    - HTML5
5. HTML Form
    - Input
        + type="text"
        + type="password"
        + type="submit"
        + type="radio"
        + type="checkbox"
        + type="date"
        + type="color"
        + type="email"
        + type="file"
        + type="number"
    - Textarea

# Session 2 CSS

1. CSS là gì?
    - Cascading Style Sheet
2. CSS Inline
3. Internal CSS
4. External CSS
    - <link rel="stylesheet" href="styles.css">
5. Debug CSS
6. CSS Selectors
    - CSS Tags
    - CSS Classes 
    - CSS ID
    - *
    - Các selector khác
        + .class1.class2
        + .class1 .class2
        + div > p
        + a:hover
7. Thứ tự ưu tiên trong CSS

# Session 3 Position

1. Box model
    - block
    - width/ height
        px / % / vw - vh
    - border
        - border-width
        - border-style
        - border-color
        - border-radius
    - padding
        - shortcode: top - right - bottom - left
        - width = width + padding
        - box-sizing
    - margin
    
2. Position
    - static
    - relative
    - absolute
    - index
    - fixed
    - sticky

# Session 4 Layout

1. CSS Flexbox
    - display: flex
    - display: inline-flex
    - wrap
    - gap
2. CSS align-Item
    
2. CSS justify-content và flex-direction
    - justify-content: flex-start
    - justify-content: flex-end
    - justify-content: center
    - justify-content: space-around
    - justify-content: space-between

3. CSS justify-content và flex-direction

4. CSS Flexbox: flex-grow và flex-shrink và Flex-basic
    - flex: [flex-grow] [flex-shrink] [flex-basic]
5. Gird

# Session 5 Responsive

1. Responsive là gì
2. Tai sao can Responsive
3. Responsive web design vs Adaptive web design
4. Mobile first & Desktop first
5. Viewport
    - <meta name="viewport" content="width=device-width, initial-scale=1"/>
        + name="viewport" Chieu rong web = chieu rong thiet bi
        + initial-scale=1 Muc zoom ban dau
6. Responsive Base
    - images
    - picture
    - text
7. Responsive Advance 
    - Media Queries 
        + all: tất cả các thiết bị media
        + screen: các thiết bị media hiển thị trên màn hình: điện thoại, máy tính bảng, máy tính bàn
        + print: hiển thị trên các văn bản in.
        + speech: các thiết bị có chức năng “đọc” nội dung trên màn hình
    - Breakpoint 
        + <576px: Cỡ màn hình điện thoại
        + 576px → 768px: Cỡ màn hình tablet
        + 768px → 1180px: Cỡ màn hình tablet ngang
        + >= 1200px: Màn hình máy tính lớn
    - Flexbox layout
8. Responsive Web Page
    - https://www.w3schools.com/css/css_rwd_templates.asp

# Session 6 Variable
1. JS là gì ?
2. Viết JS ở đâu ?
3. Variable
    - Lưu trữ thông tin / có thể bị thay đổi 
    - Key (var, let, const)
    - Output / Input
    - Cách đặt tên
        + Có thể bao gồm cả chữ và số
        + Không được bắt đầu bằng số
        + Không được chứa những ký tự đặc biệt (khoảng trắng cũng tính là ký tự đặc biệt), ngoại trừ "_" và "$".
        + Không được trùng với các từ khóa (keywords) của javascript.
    - Phạm vi hoạt động (Block scoped)
    - Tự khai báo (hoisting)

4. DataTypes
    - Type
        + Primitive (number, string, Boolean, BigInt, Symbol, Undefined, Null)
        + None-Primitives (object [array, function, object])
    - Number
        + Number operator (Addition (+), Substraction (-), Multiplication (*), Division (/), Remainder (%), ++ và - -)
        + Number method: (Math.sqrt, ...)
    - String            
        + Dấu nháy kép (Double quotes): "javascript"
        + Dấu nháy đơn (Single quotes): 'javascript'
        + Backticks: `javascript`
        + String literal (`I have ${n} dogs`)                
        + String method: (text.toLowerCase, ...)
    - Conversion
        + String to Number: let n = Number('45');
        + Number to String: let s = String(198);

# Session 7 Flow Control

1. Câu điều kiện IF - Else
    - if / if - else / if - else if - else /
    - Toán tử 3 ngôi
2. Vòng lặp Loop
    - For
    - while / do while
    - switch
3. advance
    - break
    - continue
    - infinity loop

# Session 8 Function Array

1. Function
    - init, call
    - type
        + parameter / no parameter
        + return
    - scope (global / local )
    - hoisting
        - declaration function (hoisting)
        - expressions / anonumous function (not hoisting)
        - arrow function (not hoisting)
    - Recursion (đệ quy)
    - Callback

2. Array
    - Init / Loop / Method
    - Create (push, concat, ...)
    - Read (for, for in, for of, forEach,...)
    - Update (index, for, map, ...)
    - Delete (slice(), filter())
    - Method Other (find, findIndex, fill, some, every, Math.max, Math.min,... )
    - Mảng 2 chiều: là kiểu mảng chứa các mảng khác bên trong nó.

# Session 9 Object

1. Object
    - Init / Create / Delete / Assign
    - Read
        + 1. Read Property
        + 2. Object destructuring
        + 3. Loop For In
        + 4. Read Combo (Input, Loop, Conditional, Break)
    - Update
        + 1. Update Propery
        + 2. Update Combo
2. Primitives & Reference Types
3. Object & Array & Function
    - array in object (Object advance)
    - object in object (Nested Object)
    - function in object / this 
    - object in array (Data list)
4. Object to Array

# Session 10 DOM

1. Read DOM
    - Read id
    - Read class
    - Read tags
    - querySelector / querySelectorAll
2. Update DOM
    - textContent
    - innerHTML
3. Event 
    - onClick (html/js)
    - addEventListener
4. Create
    - insertAdjacentHTML
    - createElement
5. Delete        
    - remove()  
    - removeChild
        + firstElementChild 
        + lastElementChild 
6. Style & Atribute
    - ParentNode
    - Dom Style
    - Attribute

# Session 11 DOM Event

1. Event
    - eventHandle (onclick)
    - eventListener
    - event form
        + submit
        + keydown
        + focus()
    - Event Delegation
        Kỹ thuật được sử dụng để lắng nghe các sự kiện con. 
        Uỷ quyền cho phần tử cha có thể lắng nghe các sự kiện bên trong nó
    - Event Bubbling
        Khi một sự kiện được kích hoạt, thì cha mẹ, ông bà tổ tiên nó được kích hoạt luôn.
2. Add Book

# Session 12 LocalStorage

1. localStorage
    - Store: localStorage.setItem()
    - Retrieve: localStorage.getItem()
    - Remove: localStorage.removeItem()
    
2. sessionStorage
    - Store: sessionStorage.setItem()
    - Retrieve: sessionStorage.getItem()
    - Remove: sessionStorage.removeItem()
    
3. json
    - Type (strings, number, object, array, boolean, null)
    - JSON.parse()
        + json to object
        + Json to array
    - JSON.stringify()
        + object to json
        + array to json
    - JSON Store
        + Storing data
        + Retrieving data

# Session 13 Deploy
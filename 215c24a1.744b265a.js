(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(135)),o={id:"python",title:"PyCylon"},b={id:"python",isDocsHomePage:!1,title:"PyCylon",description:"PyCylon is the Python binding for LibCylon (C++ Cylon). The uniqueness of PyCylon",source:"@site/docs/python.md",permalink:"/docs/python",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python.md",sidebar:"someSidebar",previous:{title:"C++",permalink:"/docs/cpp"},next:{title:"JCylon",permalink:"/docs/java"}},c=[{value:"Table API",id:"table-api",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Load a Table",id:"load-a-table",children:[]},{value:"Join",id:"join",children:[]},{value:"Union",id:"union",children:[]},{value:"Intersect",id:"intersect",children:[]},{value:"Subtract",id:"subtract",children:[]},{value:"Select",id:"select",children:[]}]},{value:"Python Examples",id:"python-examples",children:[]}],i={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"PyCylon is the Python binding for LibCylon (C++ Cylon). The uniqueness of PyCylon\nis that it can be used as a library or a framework. As a library, PyCylon seamlessly\nintegrates with PyArrow. This brings us the capability of providing the user the\ncompatibility with Pandas, Numpy and Tensors. As a framework we support distributed\nrelational algebra operations using MPI as the distributed backend. "),Object(l.b)("h2",{id:"table-api"},"Table API"),Object(l.b)("p",null,"PyCylon Table API currently offers a set of relational algebra operators to\npreprocess the data. "),Object(l.b)("h3",{id:"initialize"},"Initialize"),Object(l.b)("p",null,"In a Cylon programme, if you use Cylon with ",Object(l.b)("inlineCode",{parentName:"p"},"MPI")," backend, the initialization\nmust be done as follows;"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'ctx: CylonContext = CylonContext("mpi")\n')),Object(l.b)("p",null,"Without MPI, "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ctx: CylonContext = CylonContext()\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"Note: In the current release, Cylon only supports MPI as a distributed backend \n")),Object(l.b)("h3",{id:"load-a-table"},"Load a Table"),Object(l.b)("p",null,"Using Cylon "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from pycylon.data.table import Table\nfrom pycylon.data.table import csv_reader\n\ntb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n")),Object(l.b)("p",null,"Using PyArrow and convert to PyCylon Table"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from pyarrow import csv\nfrom pycylon.data.table import Table\nfrom pyarrow import Table as PyArrowTable\n\npyarrow_tb: PyArrowTable = csv.read_csv('/tmp/csv.csv')\ncylon_tb = Table.from_arrow(pyarrow_tb)\n")),Object(l.b)("p",null,"Also a Cylon Table can be converted to a PyArrow Table"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"pyarrow_tb: PyArrowTable = Table.to_arrow(cylon_tb)\n")),Object(l.b)("h3",{id:"join"},"Join"),Object(l.b)("p",null,"Join API supports ",Object(l.b)("inlineCode",{parentName:"p"},"left, right, inner, outer' joins")," with\n",Object(l.b)("inlineCode",{parentName:"p"},"Hash")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Sort")," algorithms. User can specify these configs\nas using Python ",Object(l.b)("inlineCode",{parentName:"p"},"str"),". "),Object(l.b)("p",null,"Sequential Join"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\ntb2: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n\ntb3: Table = tb1.join(ctx, table=tb2, join_type='left', algorithm='hash', left_col=0, right_col=0)\n")),Object(l.b)("p",null,"Distributed Join"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\ntb2: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n\ntb3: Table = tb1.distributed_join(ctx, table=tb2, join_type='left', algorithm='hash', left_col=0, right_col=0)\n")),Object(l.b)("h3",{id:"union"},"Union"),Object(l.b)("p",null,"Sequential Union"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.union(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Union"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_union(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"intersect"},"Intersect"),Object(l.b)("p",null,"Sequential Intersect"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.intersect(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Intersect"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_intersect(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"subtract"},"Subtract"),Object(l.b)("p",null,"Sequential Subtract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.subtract(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Subtract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_subtract(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"select"},"Select"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Note"}),"This is not yet supported from PyCylon API, but LibCylon supports this.\n")),Object(l.b)("h2",{id:"python-examples"},"Python Examples"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cylondata/cylon/blob/master/python/examples/cylon_simple_dataloader.py"}),"Simple Data Loading Benchmark")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cylondata/cylon/blob/master/python/examples/cylon_sequential_mnist.py"}),"Sequential MNIST with PyTorch"))))}p.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,y=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return n?r.a.createElement(y,b(b({ref:t},i),{},{components:n})):r.a.createElement(y,b({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
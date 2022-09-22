(function() {var implementors = {};
implementors["database"] = [{"text":"impl&lt;'a, R:&nbsp;Row&gt; FromRow&lt;'a, R&gt; for <a class=\"struct\" href=\"database/episode/struct.EpisodeWrapper.html\" title=\"struct database::episode::EpisodeWrapper\">EpisodeWrapper</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.str.html\">str</a>: ColumnIndex&lt;R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Type&lt;R::Database&gt;,&nbsp;</span>","synthetic":false,"types":["database::episode::EpisodeWrapper"]},{"text":"impl&lt;'a, R:&nbsp;Row&gt; FromRow&lt;'a, R&gt; for <a class=\"struct\" href=\"database/mediafile/struct.MediaFile.html\" title=\"struct database::mediafile::MediaFile\">MediaFile</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.str.html\">str</a>: ColumnIndex&lt;R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.bool.html\">bool</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.bool.html\">bool</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Decode&lt;'a, R::Database&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: Type&lt;R::Database&gt;,&nbsp;</span>","synthetic":false,"types":["database::mediafile::MediaFile"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
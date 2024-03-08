// 問1
// Fooが持つプロパティ全てoptionalにする
interface Foo {
  bar: string;
  baz: number;
}
type PartialFoo = Partial<Foo>;
const obj: PartialFoo = {};

//問2
// Fooが持つプロパティ全て必須
type RequiredFoo = Required<Foo>;
const requiredFooObj: RequiredFoo = {
  bar: "test",
  baz: 1,
};

//問3
// Fooからnameだけを取得したtypeを作成
type FooType = {
  name?: string;
  age?: number;
};
type PickedType = Pick<FooType, "name">;

//問4
// Fooからageを省略したtypeを作成
type OmitType = Omit<FooType, "age">;

// 問5
// 下記のuserに推論される型は？
const user = { name: "kenji", age: 98 };
// 答え
// name:stringでageがnumberで推論される
// typescriptの型推論という仕組みで、コード内で明示的に型指定がなければ自動的に型を決定してくれる

// 問6
// T extends U ? X : Yは何か？
// 条件型で、型の互換性を問い合わせる式
// 下記のIsNumberはTがnumberに割り当て可能なら"yes",そうでなければ"no"を返す
type IsNumber<T> = T extends number ? "yes" : "no";
// Tはジェネリクス型と呼ばれるもので、「これから決まる型」「どんな方でもいいよ」という入れ物のようなもの

// 問7
// 下記のメソッド名だけを抽出した型をつくる
interface Part {
  name: string;
  age: number;
  add(): number;
}

// 型Tのすべてのプロパティキー（keyof T）を反復
// プロパティの値がFunction型に割り当て可能である
// （つまり、メソッドである）場合に、そのキー名を保持
// メソッドのキー名のみ抽出される
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// <Pick>でメソッド名のみ抽出した型をつくる
type MethodsOnly<T> = Pick<T, FunctionPropertyNames<T>>;
type PartMethods = MethodsOnly<Part>;

// 問8
// neverはどんな型か？

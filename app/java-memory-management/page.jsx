'use client';

const codeExample = `public class Student {
    private String name;        // Instance variable
    private int age;           // Instance variable
    private static int count = 0;  // Static variable

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        count++;
    }

    public void displayInfo() {
        String message = "Student Info";  // Local variable
        int tempAge = this.age;          // Local variable
        System.out.println(message + ": " + name + ", " + tempAge);
    }
}

public class Main {
    public static void main(String[] args) {
        int num = 42;                    // Local primitive
        Student student1 = new Student("Alice", 20);  // Reference variable
        Student student2 = new Student("Bob", 22);    // Reference variable
    }
}`;

const stackItems = [
  { title: 'main() method frame:', lines: ['int num = 42', 'Student student1 = 0x1001 ➡️', 'Student student2 = 0x1002 ➡️'], type: 'primitive' },
  { title: 'displayInfo() method frame:', lines: ['String message = 0x2001 ➡️', 'int tempAge = 20', 'this = 0x1001 ➡️'], type: 'primitive' },
  { title: 'Constructor frame:', lines: ['String name = 0x3001 ➡️', 'int age = 20', 'this = 0x1001 ➡️'], type: 'reference' }
];

const heapItems = [
  { title: 'Student Object #1 (0x1001):', lines: ['name = 0x3001 ➡️ "Alice"', 'age = 20', 'Class metadata pointer ➡️'], type: 'object' },
  { title: 'Student Object #2 (0x1002):', lines: ['name = 0x3002 ➡️ "Bob"', 'age = 22', 'Class metadata pointer ➡️'], type: 'object' },
  { title: 'String Objects:', lines: ['0x2001: "Student Info"', '0x3001: "Alice"', '0x3002: "Bob"'], type: 'object' }
];

const methodItems = [
  { title: 'Student.class:', lines: ['Class metadata', 'Method bytecode', 'static int count = 2', 'Constant pool'] },
  { title: 'String.class, Object.class:', lines: ['System class metadata', 'Method implementations'] }
];

function MemoryItem({ item }) {
  return (
    <div className={`memory-item ${item.type || 'class-data'} rounded-lg bg-[#0d1117] p-4 text-[#c9d1d9] shadow-md`}>
      <strong>{item.title}</strong>
      {item.lines.map((line) => <div key={line}>• {line}</div>)}
    </div>
  );
}

function SideNote({ title, children }) {
  return <div className="side-note"><strong>{title}</strong>{children}</div>;
}

export default function JavaMemoryManagement() {
  return (
    <main className="memory-page min-h-screen bg-[#0d1117] px-2 py-6 text-[#c9d1d9] sm:px-4 sm:py-12">
      <div className="memory-container mx-auto max-w-[1300px] rounded-2xl bg-[#161b22] p-4 shadow-2xl sm:p-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">🧠 Java Memory Management Architecture</h1>

        <pre className="code-example my-6 overflow-x-auto rounded-lg bg-slate-800 p-5 text-xs leading-6 text-slate-100 shadow-inner sm:text-sm"><code>{codeExample}</code></pre>

        <div className="memory-diagram grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          <section className="memory-section stack-memory rounded-2xl border-2 border-red-500 p-4 shadow-lg">
            <h2 className="section-title stack-title rounded-lg bg-[#238636] p-3 text-center text-xl font-bold text-white">🥞 STACK MEMORY</h2>
            {stackItems.map((item) => <MemoryItem item={item} key={item.title} />)}
            <SideNote title="Stack stores:">
              <div>• Method call frames</div>
              <div>• Local variables</div>
              <div>• Method parameters</div>
              <div>• Reference variables (addresses)</div>
              <div>• Primitive values</div>
            </SideNote>
          </section>

          <section className="memory-section heap-memory rounded-2xl border-2 border-sky-500 p-4 shadow-lg">
            <h2 className="section-title heap-title rounded-lg bg-[#1f6feb] p-3 text-center text-xl font-bold text-white">🏔️ HEAP MEMORY</h2>
            {heapItems.map((item) => <MemoryItem item={item} key={item.title} />)}
            <SideNote title="Heap stores:">
              <div>• All objects</div>
              <div>• Instance variables</div>
              <div>• Arrays</div>
              <div>• String literals</div>
              <div>• Object metadata</div>
            </SideNote>
          </section>

          <section className="memory-section method-area rounded-2xl border-2 border-orange-600 p-4 shadow-lg">
            <h2 className="section-title method-title rounded-lg bg-[#9e6a03] p-3 text-center text-xl font-bold text-white">📚 METHOD AREA</h2>
            {methodItems.map((item) => <MemoryItem item={item} key={item.title} />)}
            <SideNote title="Method Area stores:">
              <div>• Class-level metadata</div>
              <div>• Static variables</div>
              <div>• Method bytecode</div>
              <div>• Constant pool</div>
            </SideNote>
          </section>
        </div>

        <div className="legend">
          <div className="legend-item"><span className="color-box primitive-box" />Primitive Variables</div>
          <div className="legend-item"><span className="color-box reference-box" />Reference Variables</div>
          <div className="legend-item"><span className="color-box object-box" />Objects</div>
          <div className="legend-item"><span className="color-box class-data-box" />Class Metadata</div>
        </div>

        <section className="explanation rounded-2xl bg-[#161b22] p-5 text-[#c9d1d9] shadow-lg">
          <h2 className="text-xl font-bold">🔍 Key Memory Management Concepts:</h2>
          <p><strong>Stack Memory:</strong> Each thread has its own stack. When a method is called, a new frame is pushed onto the stack containing local variables, method parameters, and return addresses. Primitive variables store actual values, while reference variables store memory addresses pointing to objects in the heap.</p>
          <p><strong>Heap Memory:</strong> Shared among all threads, the heap stores all objects and their instance variables. Objects are allocated here during runtime using the 'new' keyword. The heap is divided into Young Generation (Eden, Survivor spaces) and Old Generation for garbage collection optimization.</p>
          <p><strong>Method Area:</strong> Stores class-level data including class metadata, method bytecode, static variables, and the constant pool. This area is shared among all threads and loaded when classes are first referenced.</p>
          <p><strong>Memory Flow:</strong> When you create an object, the reference variable goes on the stack, but the actual object is allocated in the heap. The reference variable contains the memory address where the object is stored in the heap.</p>
        </section>
      </div>

      <style jsx>{`
        .memory-page { min-height: 100vh; padding: 3rem 1rem; background: #0d1117; color: #c9d1d9; }
        .memory-container { max-width: 1300px; margin: 0 auto; padding: clamp(1.25rem, 4vw, 1.875rem); border: 1px solid #30363d; border-radius: 12px; background: #161b22; box-shadow: 0 15px 35px rgba(0,0,0,0.25); }
        h1 { margin: 0 0 1.875rem; color: #f0f6fc; text-align: center; font-size: clamp(1.8rem, 4vw, 2.3rem); line-height: 1.2; }
        .code-example { margin: 1.875rem 0; padding: 1.25rem; overflow-x: auto; border: 1px solid #30363d; border-radius: 8px; background: #0d1117; color: #c9d1d9; font: 0.9rem/1.5 'Courier New', monospace; box-shadow: inset 0 4px 8px rgba(0,0,0,0.3); }
        .memory-diagram { display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1.5625rem; margin: 2.5rem 0; }
        .memory-section { flex: 1 1 280px; min-width: 280px; padding: 1.375rem; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
        .memory-section:hover { transform: translateY(-5px); }
        .stack-memory { background: #161b22; border: 1px solid #238636; }
        .heap-memory { background: #161b22; border: 1px solid #1f6feb; }
        .method-area { background: #161b22; border: 1px solid #9e6a03; }
        .section-title { margin: 0 0 1.25rem; padding: 0.625rem; border-radius: 8px; color: white; text-align: center; font-size: 1.6em; text-shadow: 1px 1px 2px rgba(0,0,0,0.3); }
        .stack-title { background: #238636; }
        .heap-title { background: #1f6feb; }
        .method-title { background: #9e6a03; }
        .memory-item { margin: 0.75rem 0; padding: 0.9375rem; border: 1px solid #30363d; border-left: 4px solid; border-radius: 8px; background: #0d1117; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: all 0.3s ease; font-size: 0.95em; line-height: 1.5; }
        .memory-item:hover { transform: translateX(5px); box-shadow: 0 6px 15px rgba(0,0,0,0.15); }
        .memory-item strong { display: inline-block; margin-bottom: 0.15rem; }
        .primitive { border-left-color: #d29922; }
        .reference { border-left-color: #a371f7; }
        .object { border-left-color: #3fb950; }
        .class-data { border-left-color: #db61a2; }
        .side-note { margin-top: 1.25rem; padding: 0.9375rem; border-radius: 8px; font-size: 0.9em; line-height: 1.6; }
        .side-note strong { display: block; margin-bottom: 0.15rem; }
        .stack-memory .side-note { background: rgba(35, 134, 54, 0.14); }
        .heap-memory .side-note { background: rgba(31, 111, 235, 0.14); }
        .method-area .side-note { background: rgba(158, 106, 3, 0.18); }
        .legend { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 0.9375rem; margin: 1.875rem 0; }
        .legend-item { display: flex; align-items: center; gap: 0.625rem; padding: 0.625rem 0.9375rem; border: 1px solid #30363d; border-radius: 8px; background: #161b22; color: #c9d1d9; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .color-box { width: 20px; height: 20px; border-radius: 4px; }
        .primitive-box { background: #d29922; }
        .reference-box { background: #a371f7; }
        .object-box { background: #3fb950; }
        .class-data-box { background: #db61a2; }
        .explanation { margin: 1.875rem 0 0; padding: 1.5625rem; border: 1px solid #30363d; border-radius: 12px; background: #161b22; color: #c9d1d9; box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
        .explanation h2 { margin: 0; font-size: 1.5em; }
        .explanation p { line-height: 1.6; }
        @media (max-width: 900px) { .memory-diagram { flex-direction: column; } .memory-section { width: 100%; box-sizing: border-box; } }
        @media (max-width: 480px) { .memory-page { padding: 1rem 0.5rem; } .memory-container { padding: 1rem; } .memory-section:hover, .memory-item:hover { transform: none; } }
      `}</style>
    </main>
  );
}
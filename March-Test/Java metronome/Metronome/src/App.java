
public class App {
    public static void main(String[] args) throws Exception {
        double bpm = 120;
        System.out.println((60.0 / bpm) * 1000);
        System.out.println((60.0 / bpm) * 1000);
        
        
        Metronome myMetronome = new Metronome();
        myMetronome.startMetronome(bpm);
        // if (args.length < 1) {
        //     System.out.println("Please provide BPM as an argument.");
        //     return;
        // }

        // double bpm = Double.parseDouble(args[0]);
        // Metronome myMetronome = new Metronome();
        // myMetronome.startMetronome(bpm);
        

    }
}

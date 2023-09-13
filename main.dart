import 'package:alwaleed/second_sreen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  TextEditingController controller = TextEditingController();
  String userData = '';
  @override
  Widget build(BuildContext context) {
    // var size = MediaQuery.of(context).size;
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          elevation: 0,
          actions: [
            IconButton(onPressed: () {}, icon: const Icon(Icons.offline_bolt))
          ],
          title: const Text("Welcome",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              )),
          centerTitle: true,
          backgroundColor: const Color.fromARGB(0, 183, 40, 40),
          foregroundColor: Colors.black,
          leading: const Row(
            children: [
              Icon(Icons.navigate_before),
              Icon(Icons.ice_skating),
            ],
          ),
        ),
        body: ListView.separated(
          separatorBuilder: (context, index) => Container(
            height: 3,
            color: const Color.fromARGB(255, 54, 244, 82),
          ),
          itemCount: 5,
          itemBuilder: (context, index) => MyListTile2(
            name: '',
            number: '',
          ),
        )
        // children: [
        //   for (int i = 0; i < 10; i++)
        //     MyListTile(title: "item $i", subtitle: "subtitle $i")
        // ]
        ,
        // )
        //   SingleChildScrollView(
        //     child: Center(
        //       child: Container(
        //         child: Column(
        //           children: [
        //             Text(
        //               "Welcome",
        //               style: TextStyle(fontSize: 100),
        //             ),
        //             Image.asset(
        //               "assets/planet.png",
        //               width: size.width * 0.5,
        //             ),
        //             Padding(
        //               padding:
        //                   const EdgeInsets.symmetric(horizontal: 2, vertical: 1),
        //               child: TextField(
        //                 controller: controller,
        //                 maxLength: 10,
        //                 style: TextStyle(fontSize: 20, color: Colors.black),
        //                 cursorColor: Colors.black,
        //                 onChanged: (_) {
        //                   setState(() {
        //                     userData = controller.text;
        //                   });
        //                 },
        //               ),
        //             ),
        //             Text(userData),
        //             TextButton(
        //               child: Text("This my Button"),
        //               onPressed: () {},
        //             ),
        //             ElevatedButton(
        //                 onPressed: () {},
        //                 style: ElevatedButton.styleFrom(
        //                     backgroundColor: Colors.orange),
        //                 child: Icon(Icons.add)),
        //           ],
        //         ),

        //         //       child: Stack(
        //         //         children: [
        //         //           Align(
        //         //             alignment: Alignment.topCenter,
        //         //             child: Text(
        //         //               "Welcome",
        //         //               style: TextStyle(fontSize: 100),
        //         //             ),
        //         //           ),
        //         //           Align(
        //         //             alignment: Alignment.bottomCenter,
        //         //             child: Image.asset(
        //         //               "assets/planet.png",
        //         //               width: size.width * 0.5,
        //         //             ),
        //         //           ),
        //         //           Align(
        //         //             alignment: Alignment.bottomCenter,
        //         //             child: Padding(
        //         //               padding: const EdgeInsets.symmetric(
        //         //                   horizontal: 2, vertical: 1),
        //         //               child: TextField(
        //         //                 controller: controller,
        //         //                 maxLength: 10,
        //         //                 style: TextStyle(fontSize: 20, color: Colors.black),
        //         //                 cursorColor: Colors.black,
        //         //                 onChanged: (_) {
        //         //                   setState(() {
        //         //                     userData = controller.text;
        //         //                   });
        //         //                 },
        //         //               ),
        //         //             ),
        //         //           ),
        //         //           Text(userData),
        //         //           TextButton(
        //         //             child: Text("This my Button"),
        //         //             onPressed: () {},
        //         //           ),
        //         //           ElevatedButton(
        //         //               onPressed: () {},
        //         //               style: ElevatedButton.styleFrom(
        //         //                   backgroundColor: Colors.orange),
        //         //               child: Icon(Icons.add)),
        //         //         ],
        //         //       ),
        //       ),
        //     ),
        //   ),
      ),
    );
  }
}

class MyListTile2 extends StatelessWidget {
  MyListTile2({required this.name, required this.number});
  String name;
  String number;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(name),
      subtitle: Text(number),
      leading: Icon(Icons.person),
      onTap: () {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => const SecondPage()));
      },
    );
  }
}
